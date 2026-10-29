// Три вида выдачи: у каждого свой эндпоинт TMDB и свой счётчик
export type SearchType = 'movie' | 'tv' | 'person';

// Порядок вкладок; первая (фильмы) — вкладка по умолчанию
export const SEARCH_TABS: { type: SearchType; label: string }[] = [
    { type: 'movie', label: 'Фильмы' },
    { type: 'tv', label: 'ТВ-шоу' },
    { type: 'person', label: 'Люди' },
];
