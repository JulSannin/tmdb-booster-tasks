import type {NavGroup, MenuEntry} from './types';

// Проверяем, есть ли у пункта меню поле items — если да, значит это группа с дропдауном
export const isGroup = (entry: MenuEntry): entry is NavGroup =>
    'items' in entry;

// Конфиг всего меню шапки: что показывать и куда вести
export const menu: MenuEntry[] = [
    {
        label: 'Фильмы',
        items: [
            { to: '/movies/popular', label: 'Популярные' },
            { to: '/movies/now-playing', label: 'Сейчас в кино' },
            { to: '/movies/up-coming', label: 'Скоро' },
            { to: '/movies/top-rated', label: 'Топ рейтинга' },
        ],
    },
    {
        label: 'ТВ-шоу',
        items: [
            { to: '/tvs/popular', label: 'Популярные' },
            { to: '/tvs/airing-today', label: 'Сейчас в кино' },
            { to: '/tvs/on-tv', label: 'Скоро' },
            { to: '/tvs/top-rated', label: 'Топ рейтинга' },
        ],
    },
    { to: '/persons', label: 'Актеры' },
    {
        label: 'Премии',
        items: [
            { to: '/awards/popular', label: 'Популярные' },
            { to: '/awards/up-coming', label: 'Скоро' },
        ],
    },
];
