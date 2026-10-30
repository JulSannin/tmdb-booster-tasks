import { matchRoutes, type RouteObject } from 'react-router';
import { describe, expect, it } from 'vitest';
import { menu } from '@/shared/model';
import routes from './routes';

type Entry = (typeof routes)[number];

// Записи routes.ts в формате, который понимает matchRoutes. Файл-роут идёт
// в id: по нему видно, какая страница выбрана
function toRouteObjects(entries: Entry[]): RouteObject[] {
    return entries.map((entry): RouteObject =>
        entry.index
            ? { id: entry.file, index: true }
            : {
                  id: entry.file,
                  path: entry.path,
                  children: entry.children && toRouteObjects(entry.children),
              }
    );
}

const routeObjects = toRouteObjects(routes);
const NOT_FOUND = 'routes/not-found.ts';

// Файл-роут, который откроется по адресу. undefined, если не подошёл ни один
// маршрут: так будет, если из карты пропадёт '*'
function pageFor(pathname: string) {
    return matchRoutes(routeObjects, pathname)?.at(-1)?.route.id;
}

describe('карта адресов', () => {
    it.each([
        ['/', 'routes/main.ts'],
        ['/search', 'routes/search.ts'],
        ['/movie/603', 'routes/movie-details.ts'],
        ['/person/287', 'routes/person-details.ts'],
        ['/movies/popular', 'routes/movies-popular.ts'],
        // статичные сегменты выигрывают у динамического :id
        ['/tv/popular', 'routes/tv-popular.ts'],
        ['/tv/top-rated', 'routes/tv-top-rated.ts'],
        ['/tv/1399', 'routes/tv-details.ts'],
        ['/persons/popular', 'routes/persons-popular.ts'],
        ['/awards/upcoming', 'routes/awards-upcoming.ts'],
    ])('%s открывает %s', (pathname, file) => {
        expect(pageFor(pathname)).toBe(file);
    });

    it.each([
        '/nope',
        // у раздела без страницы и у деталей без id адреса нет
        '/movies',
        '/movie',
        '/person',
        '/tv',
        '/persons',
        '/awards',
        '/movies/nope',
        // лишний сегмент после настоящего адреса
        '/movie/603/cast',
        '/person/287/credits',
        '/tv/1399/seasons',
        '/search/extra',
    ])('несуществующий адрес %s открывает 404', (pathname) => {
        expect(pageFor(pathname)).toBe(NOT_FOUND);
    });

    it('ни одна ссылка меню не ведёт на 404', () => {
        const links = menu.flatMap((group) =>
            group.items.map((item) => item.to)
        );
        const broken = links.filter((link) => {
            const page = pageFor(link);

            return !page || page === NOT_FOUND;
        });

        expect(links.length).toBeGreaterThan(0);
        expect(broken).toEqual([]);
    });
});
