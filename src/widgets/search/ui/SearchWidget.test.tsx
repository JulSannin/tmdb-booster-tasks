import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, it } from 'vitest';
import { TMDB_BASE_URL } from '@/shared/config';
import { renderWithProviders, server } from '@/shared/test';
import type { SearchType } from '../model/searchTabs';
import { SearchWidget } from './SearchWidget';

type TestRouter = ReturnType<typeof renderWithProviders>['router'];

// Один запрос, дошедший до «сервера» TMDB
type SearchCall = {
    type: SearchType;
    query: string | null;
    page: string | null;
    authorization: string | null;
};

type Reply = (call: SearchCall) => Response | Promise<Response>;

const matrix = {
    id: 603,
    title: 'Матрица',
    poster_path: '/matrix.jpg',
    vote_average: 8.2,
};
const matrixReloaded = {
    id: 604,
    title: 'Матрица: Перезагрузка',
    poster_path: '/reloaded.jpg',
    vote_average: 7.2,
};
const matrixShow = {
    id: 77,
    name: 'Сериал про матрицу',
    poster_path: '/show.jpg',
    vote_average: 6.5,
};
const keanu = {
    id: 6384,
    name: 'Киану Ривз',
    profile_path: '/keanu.jpg',
    known_for_department: 'Acting',
    known_for: [{ title: 'Джон Уик' }],
};
const avatar = {
    id: 19995,
    title: 'Аватар',
    poster_path: '/avatar.jpg',
    vote_average: 7.6,
};

const emptyPage = { page: 1, results: [], total_results: 0, total_pages: 0 };

// Выдача по «матрице»: фильмов 45 на трёх страницах, сериалов 7, людей 2
const matrixCatalog: Reply = ({ type, page }) => {
    switch (type) {
        case 'movie':
            return HttpResponse.json({
                page: Number(page),
                results: [page === '2' ? matrixReloaded : matrix],
                total_results: 45,
                total_pages: 3,
            });
        case 'tv':
            return HttpResponse.json({
                page: 1,
                results: [matrixShow],
                total_results: 7,
                total_pages: 1,
            });
        case 'person':
            return HttpResponse.json({
                page: 1,
                results: [keanu],
                total_results: 2,
                total_pages: 1,
            });
    }
};

// Выдача по «аватару»: только три фильма
const avatarCatalog: Reply = ({ type }) =>
    type === 'movie'
        ? HttpResponse.json({
              page: 1,
              results: [avatar],
              total_results: 3,
              total_pages: 1,
          })
        : HttpResponse.json(emptyPage);

// Все запросы поиска в порядке прихода. Очищается перед каждым тестом
const calls: SearchCall[] = [];

// Подменяет все три эндпоинта поиска и записывает запросы в calls.
// Без вызова mockSearch любой запрос упадёт: в setup.ts включён
// onUnhandledFrame: 'error'
function mockSearch(reply: Reply = matrixCatalog) {
    for (const type of ['movie', 'tv', 'person'] as const) {
        server.use(
            http.get(`${TMDB_BASE_URL}/search/${type}`, ({ request }) => {
                const { searchParams } = new URL(request.url);
                const call: SearchCall = {
                    type,
                    query: searchParams.get('query'),
                    page: searchParams.get('page'),
                    authorization: request.headers.get('authorization'),
                };

                calls.push(call);
                return reply(call);
            })
        );
    }
}

const searchbox = () => screen.getByRole('searchbox');
const tab = (name: string | RegExp) => screen.getByRole('button', { name });

// Параметры адреса, как их видит пользователь после действия
const urlParams = (router: TestRouter) =>
    Object.fromEntries(new URLSearchParams(router.state.location.search));

// Ждёт ответа всех трёх запросов: счётчики на вкладках — это total_results
// каждого из них. После этого в сети тихо, и можно считать новые запросы
async function waitForMatrixCounts() {
    await screen.findByRole('button', { name: /^Фильмы\s*45$/ });
    await screen.findByRole('button', { name: /^ТВ-шоу\s*7$/ });
    await screen.findByRole('button', { name: /^Люди\s*2$/ });
}

describe('SearchWidget', () => {
    beforeEach(() => {
        calls.length = 0;
    });

    it('без запроса показывает подсказку и не ходит в сеть', () => {
        mockSearch();
        const { store } = renderWithProviders(<SearchWidget />, {
            route: '/search',
        });

        expect(
            screen.getByText(
                'Введите название фильма, сериала или имя человека, чтобы начать поиск'
            )
        ).toBeVisible();
        expect(
            screen.queryByRole('group', { name: 'Тип результатов' })
        ).not.toBeInTheDocument();
        // Смотрим в кэш RTK Query, а не в calls: запрос появляется в кэше
        // сразу, а до обработчика msw доходит позже, и calls на этом месте
        // был бы пуст в любом случае
        expect(store.getState().baseApi.queries).toEqual({});
    });

    it('ищет по запросу из адреса: три запроса сразу, с токеном, страница первая', async () => {
        mockSearch();
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });

        await waitForMatrixCounts();

        expect(calls.map((call) => call.type).sort()).toEqual([
            'movie',
            'person',
            'tv',
        ]);
        for (const call of calls) {
            expect(call).toMatchObject({
                query: 'матрица',
                page: '1',
                authorization: 'Bearer test-token',
            });
        }
    });

    it('показывает карточки активной вкладки, остальные не рисует', async () => {
        mockSearch();
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });

        const poster = await screen.findByRole('img', { name: 'Матрица' });

        expect(poster.closest('a')).toHaveAttribute('href', '/movie/603');
        expect(
            screen.queryByRole('img', { name: 'Сериал про матрицу' })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('img', { name: 'Киану Ривз' })
        ).not.toBeInTheDocument();
    });

    it('открывает вкладку из адреса', async () => {
        mockSearch();
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица&type=tv',
        });

        const poster = await screen.findByRole('img', {
            name: 'Сериал про матрицу',
        });

        expect(poster.closest('a')).toHaveAttribute('href', '/tv/77');
        expect(tab(/^ТВ-шоу/)).toHaveAttribute('aria-pressed', 'true');
        expect(tab(/^Фильмы/)).toHaveAttribute('aria-pressed', 'false');
    });

    it('отправка формы кладёт запрос в адрес и запускает поиск', async () => {
        const user = userEvent.setup();
        mockSearch();
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search',
        });

        await user.type(searchbox(), '  матрица ');
        await user.click(screen.getByRole('button', { name: 'Search' }));
        await waitForMatrixCounts();

        // Пробелы по краям обрезаны, лишних параметров нет
        expect(urlParams(router)).toEqual({ query: 'матрица' });
        expect(screen.queryByText(/Введите название/)).not.toBeInTheDocument();
    });

    it('переключение вкладки пишет type в адрес и обходится без новых запросов', async () => {
        const user = userEvent.setup();
        mockSearch();
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });
        await waitForMatrixCounts();
        expect(calls).toHaveLength(3);

        await user.click(tab(/^Люди/));

        expect(
            await screen.findByRole('img', { name: 'Киану Ривз' })
        ).toBeVisible();
        expect(tab(/^Люди/)).toHaveAttribute('aria-pressed', 'true');
        expect(urlParams(router)).toEqual({
            query: 'матрица',
            type: 'person',
        });
        // Данные всех трёх вкладок уже в кэше
        expect(calls).toHaveLength(3);
    });

    it('клик по уже активной вкладке ничего не меняет', async () => {
        const user = userEvent.setup();
        mockSearch();
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица&page=2',
        });
        await waitForMatrixCounts();

        await user.click(tab(/^Фильмы/));

        // Страница не слетела, а в историю не добавилась новая запись
        expect(urlParams(router)).toEqual({ query: 'матрица', page: '2' });
        expect(router.state.historyAction).toBe('POP');
    });

    it('листание перезапрашивает только активную вкладку', async () => {
        const user = userEvent.setup();
        mockSearch();
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });
        await waitForMatrixCounts();

        await user.click(screen.getByRole('button', { name: 'Go to page 2' }));

        expect(
            await screen.findByRole('img', { name: 'Матрица: Перезагрузка' })
        ).toBeVisible();
        expect(urlParams(router)).toEqual({ query: 'матрица', page: '2' });
        // К трём первым добавился один: фильмы, вторая страница
        expect(calls).toHaveLength(4);
        expect(calls[3]).toMatchObject({ type: 'movie', page: '2' });
    });

    it('пустая вкладка пишет No matches found, остальные остаются живыми', async () => {
        const user = userEvent.setup();
        mockSearch((call) =>
            call.type === 'person'
                ? HttpResponse.json(emptyPage)
                : matrixCatalog(call)
        );
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });
        await screen.findByRole('img', { name: 'Матрица' });
        expect(screen.queryByText(/No matches found/)).not.toBeInTheDocument();

        await user.click(tab(/^Люди/));

        expect(
            await screen.findByText('No matches found for "матрица"')
        ).toBeVisible();
        expect(tab(/^Люди\s*0$/)).toBeVisible();
        expect(tab(/^Фильмы\s*45$/)).toBeVisible();
    });

    it('при ошибке запроса показывает «Ошибка загрузки»', async () => {
        mockSearch(() =>
            HttpResponse.json(
                { status_message: 'Invalid API key' },
                { status: 401 }
            )
        );
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });

        expect(await screen.findByText('Ошибка загрузки')).toBeVisible();
    });

    it('очистка поля возвращает страницу в исходное состояние', async () => {
        const user = userEvent.setup();
        mockSearch();
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица&type=tv',
        });
        await waitForMatrixCounts();

        await user.clear(searchbox());
        // Событие search от крестика jsdom не создаёт, его шлёт браузер
        fireEvent(searchbox(), new Event('search'));

        expect(await screen.findByText(/Введите название/)).toBeVisible();
        expect(router.state.location.search).toBe('');
        expect(searchbox()).toHaveValue('');
    });

    it('новый поиск не показывает счётчики и карточки прошлого', async () => {
        const user = userEvent.setup();
        // Ответ на «аватар» ждёт, пока тест его не отпустит: так видно
        // состояние между отправкой формы и приходом данных
        let release!: () => void;
        const gate = new Promise<void>((resolve) => {
            release = resolve;
        });
        mockSearch(async (call) => {
            if (call.query !== 'аватар') return matrixCatalog(call);

            await gate;
            return avatarCatalog(call);
        });
        renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });
        await waitForMatrixCounts();

        await user.clear(searchbox());
        await user.type(searchbox(), 'аватар{Enter}');

        // Счётчики без чисел, то есть вкладки показывают только названия
        await waitFor(() => expect(tab('Фильмы')).toBeVisible());
        expect(tab('ТВ-шоу')).toBeVisible();
        expect(tab('Люди')).toBeVisible();
        expect(
            screen.queryByRole('img', { name: 'Матрица' })
        ).not.toBeInTheDocument();

        release();

        expect(
            await screen.findByRole('button', { name: /^Фильмы\s*3$/ })
        ).toBeVisible();
        expect(
            await screen.findByRole('img', { name: 'Аватар' })
        ).toBeVisible();
        expect(tab(/^Люди\s*0$/)).toBeVisible();
    });

    it('кнопка «назад» возвращает в поле и в выдачу прошлый запрос', async () => {
        const user = userEvent.setup();
        mockSearch((call) =>
            call.query === 'аватар' ? avatarCatalog(call) : matrixCatalog(call)
        );
        const { router } = renderWithProviders(<SearchWidget />, {
            route: '/search?query=матрица',
        });
        await waitForMatrixCounts();

        await user.clear(searchbox());
        await user.type(searchbox(), 'аватар{Enter}');
        expect(
            await screen.findByRole('button', { name: /^Фильмы\s*3$/ })
        ).toBeVisible();

        await act(async () => {
            await router.navigate(-1);
        });

        expect(searchbox()).toHaveValue('матрица');
        await waitForMatrixCounts();
    });
});
