import {
    type RouteConfig,
    route,
    index,
    prefix,
} from '@react-router/dev/routes';

// Здесь описывается карта всех адресов (URL) сайта и то, какой файл-роут
// отвечает за каждый из них. React Router framework mode сам строит
// маршрутизацию по этому массиву.
export default [
    // index() — маршрут для "/" (главная страница)
    index('routes/main.ts'),

    // prefix('movies', [...]) — все пути внутри получают префикс /movies,
    // то есть route('popular', ...) станет доступен по /movies/popular
    ...prefix('movies', [
        route('popular', 'routes/popular.ts'),
        route('now-playing', 'routes/now-playing.ts'),
        route('up-coming', 'routes/up-coming.ts'),
        route('top-rated', 'routes/top-rated.ts'),
    ]),

    ...prefix('tvs', [
        route('popular', 'routes/tv-popular.ts'),
        route('airing-today', 'routes/tv-airing-today.ts'),
        route('on-tv', 'routes/tv-on-tv.ts'),
        route('top-rated', 'routes/tv-top-rated.ts'),
    ]),

    // route('путь', 'файл') — обычный маршрут без вложенных подпутей
    route('persons', 'routes/persons.ts'),

    ...prefix('awards', [
        route('popular', 'routes/awards-popular.ts'),
        route('up-coming', 'routes/awards-up-coming.ts'),
    ]),
] satisfies RouteConfig;
