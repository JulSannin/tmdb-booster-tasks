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

    route('search', 'routes/search.ts'),

    // prefix('movies', [...]) — все пути внутри получают префикс /movies,
    // то есть route('popular', ...) станет доступен по /movies/popular
    ...prefix('movies', [
        route('popular', 'routes/movies-popular.ts'),
        route('now-playing', 'routes/movies-now-playing.ts'),
        route('upcoming', 'routes/movies-upcoming.ts'),
        route('top-rated', 'routes/movies-top-rated.ts'),
    ]),

    ...prefix('tv', [
        route('popular', 'routes/tv-popular.ts'),
        route('airing-today', 'routes/tv-airing-today.ts'),
        route('on-tv', 'routes/tv-on-tv.ts'),
        route('top-rated', 'routes/tv-top-rated.ts'),
    ]),

    ...prefix('persons', [route('popular', 'routes/persons-popular.ts')]),

    ...prefix('awards', [
        route('popular', 'routes/awards-popular.ts'),
        route('upcoming', 'routes/awards-upcoming.ts'),
    ]),
] satisfies RouteConfig;
