import { type NavGroup } from './nav';

// Конфиг категорий сайта: используется и в шапке (с выпадающими списками),
// и в футере (плоскими ссылками на items[0] каждой группы)
export const menu: NavGroup[] = [
    {
        id: 1,
        label: 'Фильмы',
        items: [
            { to: '/movies/popular', label: 'Популярные' },
            { to: '/movies/now-playing', label: 'Сейчас в кино' },
            { to: '/movies/upcoming', label: 'Скоро' },
            { to: '/movies/top-rated', label: 'Топ рейтинга' },
        ],
    },
    {
        id: 2,
        label: 'ТВ-шоу',
        items: [
            { to: '/tv/popular', label: 'Популярные' },
            { to: '/tv/airing-today', label: 'Сейчас в кино' },
            { to: '/tv/on-tv', label: 'Скоро' },
            { to: '/tv/top-rated', label: 'Топ рейтинга' },
        ],
    },
    {
        id: 3,
        label: 'Актеры',
        items: [{ to: '/persons/popular', label: 'Популярные' }],
    },
    {
        id: 4,
        label: 'Премии',
        items: [
            { to: '/awards/popular', label: 'Популярные' },
            { to: '/awards/upcoming', label: 'Скоро' },
        ],
    },
];
