import { SEARCH_TABS, type SearchType } from './searchTabs';

// По документации TMDB страниц в выдаче не больше 500 — дальше листать нельзя
export const MAX_PAGE = 500;

// Тип и страница лежат в URL (?type=tv&page=2), поэтому их могут испортить
// руками: всё, что не подходит, приводим к допустимому значению

export function parseSearchType(raw: string | null): SearchType {
    return SEARCH_TABS.find((tab) => tab.type === raw)?.type ?? 'movie';
}

export function parsePage(raw: string | null): number {
    const page = Number(raw);
    return Number.isInteger(page) && page >= 1 ? Math.min(page, MAX_PAGE) : 1;
}
