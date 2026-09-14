import {
  type RouteConfig,
  route,
  index,
  prefix,
} from '@react-router/dev/routes';

export default [
  index('routes/main.ts'),

  ...prefix('movies', [
    index('routes/popular.ts'),
    route('now-playing', 'routes/now-playing.ts'),
    route('upcoming', 'routes/upcoming.ts'),
    route('top-rated', 'routes/top-rated.ts'),
  ]),

  ...prefix('tvs', [
    index('routes/tv-popular.ts'),
    route('airing-today', 'routes/tv-airing-today.ts'),
    route('on-tv', 'routes/tv-on-tv.ts'),
    route('top-rated', 'routes/tv-top-rated.ts'),
  ]),

  route('persons', 'routes/persons.ts'),

  ...prefix('awards', [
    index('routes/awards-popular.ts'),
    route('upcoming', 'routes/awards-upcoming.ts'),
  ]),
] satisfies RouteConfig;
