import { act, screen, within } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, it } from 'vitest';
import { TMDB_BASE_URL, TMDB_IMAGE_URL } from '@/shared/config';
import { renderWithProviders, server } from '@/shared/test';
import { PersonDetailsWidget } from './PersonDetailsWidget';

// Три блока страницы, у каждого свой запрос
const blocks = ['details', 'movies', 'tv'] as const;
type Block = (typeof blocks)[number];

// Один запрос, дошедший до «сервера» TMDB
type Call = {
    block: Block;
    id: string;
    authorization: string | null;
};

type Reply = (call: Call) => Response | Promise<Response>;

// Умерший человек, чтобы возраст в тесте не зависел от сегодняшней даты:
// у живого он растёт каждый день
const chaplin = {
    id: 4000,
    name: 'Чарли Чаплин',
    profile_path: '/chaplin.jpg',
    known_for_department: 'Acting',
    birthday: '1889-04-16',
    deathday: '1977-12-25',
    place_of_birth: 'Лондон, Англия',
    biography: 'Английский комик, режиссёр и композитор.',
};
// TMDB отдаёт работы не по популярности, и их там десятки. Чем больше номер,
// тем популярнее
const movies = Array.from({ length: 12 }, (_, i) => ({
    id: 100 + i,
    title: `Фильм ${i + 1}`,
    poster_path: `/film${i + 1}.jpg`,
    vote_average: 7,
    popularity: i + 1,
    character: `Роль ${i + 1}`,
}));
// id сериалов нарочно те же, что у фильмов: в TMDB это разные таблицы
const shows = Array.from({ length: 12 }, (_, i) => ({
    id: 100 + i,
    name: `Сериал ${i + 1}`,
    poster_path: `/show${i + 1}.jpg`,
    vote_average: 8,
    popularity: i + 1,
    character: `Роль ${i + 1}`,
}));

const other = {
    id: 4001,
    name: 'Другой человек',
    profile_path: '/other.jpg',
    known_for_department: 'Directing',
    birthday: '1900-01-01',
    deathday: '1980-01-01',
    place_of_birth: 'Париж, Франция',
    biography: 'Другая биография',
};
const otherMovies = [
    {
        id: 900,
        title: 'Другой фильм',
        poster_path: '/other-film.jpg',
        vote_average: 6,
        popularity: 1,
        character: 'Роль',
    },
];
const otherShows = [
    {
        id: 901,
        name: 'Другой сериал',
        poster_path: '/other-show.jpg',
        vote_average: 6,
        popularity: 1,
        character: 'Роль',
    },
];

// Ответы трёх эндпоинтов страницы для одного человека
function personPage(
    details: object,
    movieCredits: object,
    tvCredits: object
): Reply {
    return ({ block }) => {
        switch (block) {
            case 'details':
                return HttpResponse.json(details);
            case 'movies':
                return HttpResponse.json(movieCredits);
            case 'tv':
                return HttpResponse.json(tvCredits);
        }
    };
}

const chaplinPage = personPage(chaplin, { cast: movies }, { cast: shows });
const otherPage = personPage(
    other,
    { cast: otherMovies },
    { cast: otherShows }
);

// Два человека: переход между ними проверяет, что блоки не держат старые данные
const twoPeople: Reply = (call) =>
    call.id === '4001' ? otherPage(call) : chaplinPage(call);

const failure = () =>
    HttpResponse.json({ status_message: 'Not found' }, { status: 404 });

// Все запросы страницы в порядке прихода. Очищается перед каждым тестом
const calls: Call[] = [];

const endpoints = [
    ['details', ''],
    ['movies', '/movie_credits'],
    ['tv', '/tv_credits'],
] as const;

// Подменяет три эндпоинта страницы и записывает запросы в calls. Без вызова
// mockPerson любой запрос упадёт: в setup.ts включён onUnhandledFrame: 'error'
function mockPerson(reply: Reply) {
    for (const [block, suffix] of endpoints) {
        server.use(
            http.get(
                `${TMDB_BASE_URL}/person/:id${suffix}`,
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
function renderPerson(route = '/person/4000') {
    return renderWithProviders(<PersonDetailsWidget />, {
        route,
        path: '/person/:id',
    });
}

// Что на странице, когда блок загрузился. Самые популярные работы Чаплина:
// «Фильм 12» и «Сериал 12»
const loaded: Record<Block, () => Promise<HTMLElement>> = {
    details: () =>
        screen.findByRole('heading', { level: 1, name: 'Чарли Чаплин' }),
    movies: () => screen.findByRole('img', { name: 'Фильм 12' }),
    tv: () => screen.findByRole('img', { name: 'Сериал 12' }),
};

// Ждёт все три блока страницы Чаплина: после этого в сети тихо
async function waitForChaplinPage() {
    await loaded.details();
    await loaded.movies();
    await loaded.tv();
}

const heading = (name: string) => screen.getByRole('heading', { name });

// Содержимое блока: ищем по заголовку, у <section> без aria-label роли нет
function block(title: string) {
    const section = heading(title).closest('section');

    if (!section) throw new Error(`Нет блока «${title}»`);
    return within(section);
}

// Названия карточек блока в том порядке, в каком они на странице
const titlesIn = (title: string) =>
    block(title)
        .getAllByRole('img')
        .map((img) => img.getAttribute('alt'));

// Значение строки «Родился: …»: <dd> стоит сразу за <dt> с названием
const fact = (label: string) => screen.getByText(label).nextElementSibling;

describe('PersonDetailsWidget', () => {
    beforeEach(() => {
        calls.length = 0;
    });

    it('показывает фото, имя, профессию, даты с возрастом, место рождения и биографию', async () => {
        mockPerson(chaplinPage);
        renderPerson();

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'Чарли Чаплин',
            })
        ).toBeVisible();
        expect(
            screen.getByRole('img', { name: 'Чарли Чаплин' })
        ).toHaveAttribute('src', `${TMDB_IMAGE_URL}/h632/chaplin.jpg`);
        expect(fact('Профессия')).toHaveTextContent('Acting');
        // Возраст стоит у даты смерти, а у даты рождения его нет
        expect(fact('Родился')).toHaveTextContent(/^16 апреля 1889$/);
        expect(fact('Умер')).toHaveTextContent('25 декабря 1977 (88 лет)');
        expect(fact('Место рождения')).toHaveTextContent('Лондон, Англия');
        expect(
            screen.getByText('Английский комик, режиссёр и композитор.')
        ).toBeVisible();
        expect(
            screen.getByRole('button', { name: 'Назад' })
        ).toBeInTheDocument();
    });

    it('известные фильмы: десять самых популярных по убыванию, остальных нет', async () => {
        mockPerson(chaplinPage);
        renderPerson();
        await waitForChaplinPage();

        // Из двенадцати отброшены два наименее популярных: первый и второй
        expect(titlesIn('Известные фильмы')).toEqual(
            Array.from({ length: 10 }, (_, i) => `Фильм ${12 - i}`)
        );
        expect(block('Известные фильмы').getAllByRole('link')).toHaveLength(10);
    });

    it('известные ТВ-шоу: десять самых популярных по убыванию, остальных нет', async () => {
        mockPerson(chaplinPage);
        renderPerson();
        await waitForChaplinPage();

        expect(titlesIn('Известные ТВ-шоу')).toEqual(
            Array.from({ length: 10 }, (_, i) => `Сериал ${12 - i}`)
        );
        expect(block('Известные ТВ-шоу').getAllByRole('link')).toHaveLength(10);
    });

    it('карточка фильма ведёт на /movie/:id, а сериала — на /tv/:id', async () => {
        mockPerson(chaplinPage);
        renderPerson();
        await waitForChaplinPage();

        // У фильма и сериала один и тот же id (111), а страницы разные
        expect(
            block('Известные фильмы')
                .getByRole('img', { name: 'Фильм 12' })
                .closest('a')
        ).toHaveAttribute('href', '/movie/111');
        expect(
            block('Известные ТВ-шоу')
                .getByRole('img', { name: 'Сериал 12' })
                .closest('a')
        ).toHaveAttribute('href', '/tv/111');
    });

    it('у режиссёра без ролей в блоках работа за кадром', async () => {
        mockPerson(
            personPage(
                chaplin,
                { cast: [], crew: [movies[3], movies[7]] },
                { cast: [], crew: [shows[5]] }
            )
        );
        renderPerson();

        expect(
            await block('Известные фильмы').findByRole('img', {
                name: 'Фильм 8',
            })
        ).toBeVisible();
        expect(titlesIn('Известные фильмы')).toEqual(['Фильм 8', 'Фильм 4']);
        expect(
            await block('Известные ТВ-шоу').findByRole('img', {
                name: 'Сериал 6',
            })
        ).toBeVisible();
    });

    it('три запроса сразу, к нужному id и с токеном', async () => {
        mockPerson(chaplinPage);
        renderPerson();
        await waitForChaplinPage();

        expect(calls.map((call) => call.block).sort()).toEqual([
            'details',
            'movies',
            'tv',
        ]);
        for (const call of calls) {
            expect(call).toMatchObject({
                id: '4000',
                authorization: 'Bearer test-token',
            });
        }
    });

    // 287abc интереснее всего: TMDB на /person/287abc сам отвечает 200 и отдаёт
    // человека, поэтому отсечь такой адрес может только сама страница
    it.each(['abc', '287abc'])(
        'некорректный id «%s» в адресе: экран 404 вместо блоков, в сеть не ходит',
        (id) => {
            mockPerson(chaplinPage);
            const { store } = renderPerson(`/person/${id}`);

            expect(
                screen.getByRole('heading', {
                    level: 1,
                    name: 'Страница не найдена',
                })
            ).toBeVisible();
            expect(
                screen.getByRole('link', { name: 'На главную' })
            ).toHaveAttribute('href', '/');
            expect(
                screen.queryByRole('heading', { name: 'Известные фильмы' })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole('button', { name: 'Назад' })
            ).not.toBeInTheDocument();
            expect(store.getState().baseApi.queries).toEqual({});
        }
    );

    it.each(blocks)(
        'ошибка в блоке «%s» не прячет остальные',
        async (broken) => {
            mockPerson((call) =>
                call.block === broken ? failure() : chaplinPage(call)
            );
            renderPerson();

            // Сообщение одно: у остальных блоков ошибки нет
            expect(await screen.findByText('Ошибка загрузки')).toBeVisible();
            for (const name of blocks) {
                if (name !== broken) {
                    expect(await loaded[name]()).toBeVisible();
                }
            }
        }
    );

    it('если нечего показать, пишет об этом вместо пустых блоков', async () => {
        mockPerson(
            personPage(
                {
                    id: 4000,
                    name: 'Без данных',
                    profile_path: null,
                    known_for_department: '',
                    birthday: null,
                    deathday: null,
                    place_of_birth: null,
                    biography: '',
                },
                { cast: [], crew: [] },
                { cast: [], crew: [] }
            )
        );
        renderPerson();

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'Без данных',
            })
        ).toBeVisible();
        expect(screen.getByRole('img', { name: 'Без данных' })).toHaveAttribute(
            'src',
            '/no-photo.svg'
        );
        expect(screen.getByText('Биография отсутствует')).toBeVisible();
        // Строки, которых TMDB не знает, не рисуются совсем
        for (const label of [
            'Профессия',
            'Родился',
            'Умер',
            'Место рождения',
        ]) {
            expect(screen.queryByText(label)).not.toBeInTheDocument();
        }
        expect(await screen.findByText('Фильмов не нашлось')).toBeVisible();
        expect(await screen.findByText('ТВ-шоу не нашлось')).toBeVisible();
    });

    it('при переходе на другого человека не показывает данные прошлого', async () => {
        // Ответы второго человека держим, пока не отпустим: так видно, что
        // стоит на странице в промежутке между переходом и ответом
        let release!: () => void;
        const otherGate = new Promise<void>((resolve) => {
            release = resolve;
        });

        mockPerson(async (call) => {
            if (call.id === '4001') await otherGate;
            return twoPeople(call);
        });
        const { router } = renderPerson();
        await waitForChaplinPage();

        await act(async () => {
            await router.navigate('/person/4001');
        });

        // Без key у блоков осталась бы data прошлого аргумента (RTK Query
        // держит её, пока грузится новая), и здесь висел бы Чаплин
        expect(
            screen.queryByRole('heading', { level: 1, name: 'Чарли Чаплин' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('img', { name: 'Фильм 12' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('img', { name: 'Сериал 12' })
        ).not.toBeInTheDocument();

        release();

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'Другой человек',
            })
        ).toBeVisible();
        expect(
            await screen.findByRole('img', { name: 'Другой фильм' })
        ).toBeVisible();
        expect(
            await screen.findByRole('img', { name: 'Другой сериал' })
        ).toBeVisible();
    });
});
