import { act, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, it } from 'vitest';
import { TMDB_BASE_URL, TMDB_IMAGE_URL } from '@/shared/config';
import { renderWithProviders, server } from '@/shared/test';
import type { MediaType } from '../model/mediaType';
import { MediaDetailsWidget } from './MediaDetailsWidget';

type Block = 'details' | 'credits' | 'similar';

// Один запрос, дошедший до «сервера» TMDB
type Call = {
    block: Block;
    id: string;
    authorization: string | null;
};

type Reply = (call: Call) => Response | Promise<Response>;

const matrix = {
    id: 603,
    title: 'Матрица',
    overview: 'Хакер узнаёт правду о своём мире',
    poster_path: '/matrix.jpg',
    release_date: '1999-03-30',
    runtime: 136,
    genres: [
        { id: 28, name: 'Боевик' },
        { id: 878, name: 'Фантастика' },
    ],
    vote_average: 8.2,
};
// TMDB отдаёт актёров по порядку в титрах, и их там десятки. Третий без фото
const cast = Array.from({ length: 8 }, (_, i) => ({
    id: 100 + i,
    name: `Актёр ${i + 1}`,
    profile_path: i === 2 ? null : `/actor${i + 1}.jpg`,
    character: `Роль ${i + 1}`,
}));
// /similar отдаёт 20 фильмов, здесь хватит двенадцати
const similar = Array.from({ length: 12 }, (_, i) => ({
    id: 200 + i,
    title: `Похожий ${i + 1}`,
    poster_path: `/similar${i + 1}.jpg`,
    vote_average: 6.5,
}));

const matrixReloaded = {
    id: 604,
    title: 'Матрица: Перезагрузка',
    overview: 'Продолжение истории',
    poster_path: '/reloaded.jpg',
    release_date: '2003-05-15',
    runtime: 138,
    genres: [{ id: 28, name: 'Боевик' }],
    vote_average: 7.2,
};
const reloadedCast = [
    {
        id: 300,
        name: 'Другой актёр',
        profile_path: '/other.jpg',
        character: 'Морфеус',
    },
];
const reloadedSimilar = [
    {
        id: 400,
        title: 'Похожий на вторую',
        poster_path: '/s.jpg',
        vote_average: 7,
    },
];

const show = {
    id: 77,
    name: 'Сериал про матрицу',
    overview: 'Герои ищут выход из симуляции',
    poster_path: '/show.jpg',
    first_air_date: '2011-04-17',
    number_of_seasons: 8,
    number_of_episodes: 73,
    genres: [{ id: 18, name: 'Драма' }],
    vote_average: 8.4,
};
const showCast = [
    {
        id: 500,
        name: 'Актриса сериала',
        profile_path: '/actress.jpg',
        character: 'Героиня',
    },
];
const showSimilar = [
    {
        id: 600,
        name: 'Похожий сериал',
        poster_path: '/similar-show.jpg',
        vote_average: 7,
    },
];

// Ответы трёх эндпоинтов страницы для одного фильма или сериала
function catalog(
    details: object,
    credits: object[],
    similarResults: object[]
): Reply {
    return ({ block }) => {
        switch (block) {
            case 'details':
                return HttpResponse.json(details);
            case 'credits':
                return HttpResponse.json({ cast: credits });
            case 'similar':
                return HttpResponse.json({
                    page: 1,
                    results: similarResults,
                    total_results: similarResults.length,
                    total_pages: 1,
                });
        }
    };
}

const matrixCatalog = catalog(matrix, cast, similar);
const reloadedCatalog = catalog(matrixReloaded, reloadedCast, reloadedSimilar);
const showCatalog = catalog(show, showCast, showSimilar);

// Два фильма: переход между ними проверяют тесты кнопки «Назад» и key
const twoFilms: Reply = (call) =>
    call.id === '604' ? reloadedCatalog(call) : matrixCatalog(call);

// Все запросы страницы в порядке прихода. Очищается перед каждым тестом
const calls: Call[] = [];

const endpoints = [
    ['details', ''],
    ['credits', '/credits'],
    ['similar', '/similar'],
] as const;

// Подменяет три эндпоинта страницы и записывает запросы в calls. Без вызова
// mockMedia любой запрос упадёт: в setup.ts включён onUnhandledFrame: 'error'
function mockMedia(reply: Reply, mediaType: MediaType = 'movie') {
    for (const [block, suffix] of endpoints) {
        server.use(
            http.get(
                `${TMDB_BASE_URL}/${mediaType}/:id${suffix}`,
                ({ request, params }) => {
                    const call: Call = {
                        block,
                        id: String(params.id),
                        authorization: request.headers.get('authorization'),
                    };

                    calls.push(call);
                    return reply(call);
                }
            )
        );
    }
}

// Страница рисуется под тем же шаблоном маршрута, что и в приложении:
// useParams читает id из адреса
function renderMovie(route = '/movie/603') {
    return renderWithProviders(<MediaDetailsWidget mediaType="movie" />, {
        route,
        path: '/movie/:id',
    });
}

function renderShow(route = '/tv/77') {
    return renderWithProviders(<MediaDetailsWidget mediaType="tv" />, {
        route,
        path: '/tv/:id',
    });
}

// Ждёт все три блока «Матрицы»: после этого в сети тихо
async function waitForMatrixPage() {
    await screen.findByRole('heading', { level: 1, name: 'Матрица' });
    await screen.findByText('Актёр 1');
    await screen.findByRole('img', { name: 'Похожий 1' });
}

const heading = (name: string) => screen.getByRole('heading', { name });

// Содержимое блока: ищем по заголовку, у <section> без aria-label роли нет
function block(title: string) {
    const section = heading(title).closest('section');

    if (!section) throw new Error(`Нет блока «${title}»`);
    return within(section);
}

const backButton = () => screen.getByRole('button', { name: 'Назад' });

describe('MediaDetailsWidget', () => {
    beforeEach(() => {
        calls.length = 0;
    });

    it('показывает постер, название, год, длительность, рейтинг, жанры и описание', async () => {
        mockMedia(matrixCatalog);
        renderMovie();

        expect(
            await screen.findByRole('heading', { level: 1, name: 'Матрица' })
        ).toBeVisible();
        expect(screen.getByRole('img', { name: 'Матрица' })).toHaveAttribute(
            'src',
            `${TMDB_IMAGE_URL}/w780/matrix.jpg`
        );
        expect(screen.getByText('1999 · 2 ч 16 мин')).toBeVisible();
        expect(screen.getByText('8.2')).toBeVisible();
        expect(screen.getByText('Боевик')).toBeVisible();
        expect(screen.getByText('Фантастика')).toBeVisible();
        expect(
            screen.getByText('Хакер узнаёт правду о своём мире')
        ).toBeVisible();
    });

    it('в главных ролях: первые шесть актёров с фото и ролью, остальных нет', async () => {
        mockMedia(matrixCatalog);
        renderMovie();
        await waitForMatrixPage();

        const actors = block('В главных ролях');

        expect(actors.getAllByRole('listitem')).toHaveLength(6);
        expect(actors.getByRole('img', { name: 'Актёр 1' })).toHaveAttribute(
            'src',
            `${TMDB_IMAGE_URL}/h632/actor1.jpg`
        );
        expect(actors.getByText('Роль 1')).toBeVisible();
        expect(actors.getByText('Актёр 6')).toBeVisible();
        // Седьмой и восьмой пришли от TMDB, но на странице им места нет
        expect(actors.queryByText('Актёр 7')).not.toBeInTheDocument();
        expect(actors.queryByText('Актёр 8')).not.toBeInTheDocument();
    });

    it('у актёра без фото подставляется заглушка', async () => {
        mockMedia(matrixCatalog);
        renderMovie();
        await waitForMatrixPage();

        expect(
            block('В главных ролях').getByRole('img', { name: 'Актёр 3' })
        ).toHaveAttribute('src', '/no-photo.svg');
    });

    it('похожие фильмы: не больше десяти карточек, каждая ведёт на свою страницу', async () => {
        mockMedia(matrixCatalog);
        renderMovie();
        await waitForMatrixPage();

        const similarBlock = block('Похожие фильмы');

        expect(similarBlock.getAllByRole('link')).toHaveLength(10);
        expect(
            similarBlock.getByRole('img', { name: 'Похожий 1' }).closest('a')
        ).toHaveAttribute('href', '/movie/200');
        expect(
            similarBlock.queryByRole('img', { name: 'Похожий 11' })
        ).not.toBeInTheDocument();
    });

    it('три запроса сразу, к нужному id и с токеном', async () => {
        mockMedia(matrixCatalog);
        renderMovie();
        await waitForMatrixPage();

        expect(calls.map((call) => call.block).sort()).toEqual([
            'credits',
            'details',
            'similar',
        ]);
        for (const call of calls) {
            expect(call).toMatchObject({
                id: '603',
                authorization: 'Bearer test-token',
            });
        }
    });

    it('сериал: берёт данные из tv-эндпоинтов, фильмов не запрашивает', async () => {
        mockMedia(showCatalog, 'tv');
        const { store } = renderShow();

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'Сериал про матрицу',
            })
        ).toBeVisible();
        expect(screen.getByText('2011 · 8 сезонов · 73 серии')).toBeVisible();
        expect(screen.getByText('Драма')).toBeVisible();
        expect(await screen.findByText('Актриса сериала')).toBeVisible();
        expect(screen.getByText('Героиня')).toBeVisible();

        const similarBlock = block('Похожие ТВ-шоу');
        const card = await similarBlock.findByRole('img', {
            name: 'Похожий сериал',
        });

        expect(card.closest('a')).toHaveAttribute('href', '/tv/600');
        // Смотрим в кэш RTK Query: запрос попадает туда сразу, а до
        // обработчика msw доходит позже. Без skip ушёл бы лишний запрос
        // /movie/77, и ключи с get3Movie оказались бы в кэше
        const keys = Object.keys(store.getState().baseApi.queries);

        expect(keys).toHaveLength(3);
        expect(keys.every((key) => key.startsWith('get3Tv'))).toBe(true);
    });

    it('некорректный id в адресе: сообщение вместо блоков, в сеть не ходит', () => {
        mockMedia(matrixCatalog);
        const { store } = renderMovie('/movie/abc');

        expect(screen.getByText('Некорректный адрес страницы')).toBeVisible();
        expect(backButton()).toBeVisible();
        expect(
            screen.queryByRole('heading', { name: 'В главных ролях' })
        ).not.toBeInTheDocument();
        expect(store.getState().baseApi.queries).toEqual({});
    });

    it('ошибка в данных фильма не прячет актёров и похожие', async () => {
        mockMedia((call) =>
            call.block === 'details'
                ? HttpResponse.json(
                      { status_message: 'Not found' },
                      { status: 404 }
                  )
                : matrixCatalog(call)
        );
        renderMovie();

        // Сообщение одно: у остальных блоков ошибки нет
        expect(await screen.findByText('Ошибка загрузки')).toBeVisible();
        expect(await screen.findByText('Актёр 1')).toBeVisible();
        expect(
            await screen.findByRole('img', { name: 'Похожий 1' })
        ).toBeVisible();
    });

    it('если нечего показать, пишет об этом вместо пустых блоков', async () => {
        mockMedia((call) =>
            call.block === 'details'
                ? HttpResponse.json({ id: 603, title: 'Без данных' })
                : catalog({}, [], [])(call)
        );
        renderMovie();

        expect(
            await screen.findByRole('heading', { level: 1, name: 'Без данных' })
        ).toBeVisible();
        expect(screen.getByText('Описание отсутствует')).toBeVisible();
        expect(await screen.findByText('Список актёров пуст')).toBeVisible();
        expect(
            await screen.findByText('Похожих фильмов не нашлось')
        ).toBeVisible();
    });

    describe('кнопка «Назад»', () => {
        it('на странице, открытой по прямой ссылке, ведёт на главную', async () => {
            const user = userEvent.setup();
            mockMedia(matrixCatalog);
            const { router } = renderMovie();
            await waitForMatrixPage();

            await user.click(backButton());

            await waitFor(() =>
                expect(router.state.location.pathname).toBe('/')
            );
        });

        it('после перехода по сайту возвращает на предыдущую страницу', async () => {
            const user = userEvent.setup();
            mockMedia(twoFilms);
            const { router } = renderMovie();
            await waitForMatrixPage();

            await act(async () => {
                await router.navigate('/movie/604');
            });
            await screen.findByRole('heading', {
                level: 1,
                name: 'Матрица: Перезагрузка',
            });
            await user.click(backButton());

            await waitFor(() =>
                expect(router.state.location.pathname).toBe('/movie/603')
            );
            expect(
                await screen.findByRole('heading', {
                    level: 1,
                    name: 'Матрица',
                })
            ).toBeVisible();
        });
    });

    it('при переходе на другой фильм не показывает данные прошлого', async () => {
        // Ответы второго фильма держим, пока не отпустим: так видно, что
        // стоит на странице в промежутке между переходом и ответом
        let release!: () => void;
        const reloadedGate = new Promise<void>((resolve) => {
            release = resolve;
        });

        mockMedia(async (call) => {
            if (call.id === '604') await reloadedGate;
            return twoFilms(call);
        });
        const { router } = renderMovie();
        await waitForMatrixPage();

        await act(async () => {
            await router.navigate('/movie/604');
        });

        // Без key у блоков осталась бы data прошлого аргумента (RTK Query
        // держит её, пока грузится новая), и здесь висела бы «Матрица»
        expect(
            screen.queryByRole('heading', { level: 1, name: 'Матрица' })
        ).not.toBeInTheDocument();
        expect(screen.queryByText('Актёр 1')).not.toBeInTheDocument();
        expect(
            screen.queryByRole('img', { name: 'Похожий 1' })
        ).not.toBeInTheDocument();

        release();

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'Матрица: Перезагрузка',
            })
        ).toBeVisible();
        expect(await screen.findByText('Другой актёр')).toBeVisible();
        expect(
            await screen.findByRole('img', { name: 'Похожий на вторую' })
        ).toBeVisible();
    });
});
