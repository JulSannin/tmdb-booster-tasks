import type { ReactNode } from 'react';
import { Pagination } from '@mui/material';
import { MediaGrid, mapMovies, mapTvShows } from '@/entities/media';
import { PersonGrid, mapPersons } from '@/entities/person';
import {
    useGet3SearchMovieQuery,
    useGet3SearchPersonQuery,
    useGet3SearchTvQuery,
} from '../api/api';
import { MAX_PAGE } from '../model/searchParams';
import type { SearchType } from '../model/searchTabs';
import { SearchTabs } from './SearchTabs';
import s from './SearchResults.module.css';

type Props = {
    query: string;
    type: SearchType;
    page: number;
    onTypeChange: (type: SearchType) => void;
    onPageChange: (page: number) => void;
};

// Выдача по непустому запросу: вкладки со счётчиками, список активной вкладки
// и пагинация. Родитель вешает на компонент key={query}: у нового поиска не
// должно остаться ни чужих карточек, ни чужих счётчиков (RTK Query до прихода
// ответа держит в data результат предыдущего аргумента)
export function SearchResults({
    query,
    type,
    page,
    onTypeChange,
    onPageChange,
}: Props) {
    // Запросов всегда три: счётчикам вкладок нужен total_results каждого типа.
    // Номер страницы относится только к активной вкладке, у остальных всегда
    // первая — так листание перезапрашивает один список, а переключение
    // вкладки берёт готовый ответ из кэша
    const movies = useGet3SearchMovieQuery({
        query,
        page: type === 'movie' ? page : 1,
    });
    const tvShows = useGet3SearchTvQuery({
        query,
        page: type === 'tv' ? page : 1,
    });
    const persons = useGet3SearchPersonQuery({
        query,
        page: type === 'person' ? page : 1,
    });

    const active = { movie: movies, tv: tvShows, person: persons }[type];
    const status = {
        isLoading: active.isLoading,
        isFetching: active.isFetching,
        isError: active.isError,
    };

    const counts: Record<SearchType, number | undefined> = {
        movie: movies.data?.total_results,
        tv: tvShows.data?.total_results,
        person: persons.data?.total_results,
    };

    const totalPages = Math.min(active.data?.total_pages ?? 0, MAX_PAGE);
    const isEmpty = !active.isFetching && active.data?.total_results === 0;

    let list: ReactNode;
    if (isEmpty) {
        list = <p className={s.message}>{`No matches found for "${query}"`}</p>;
    } else if (type === 'person') {
        list = (
            <PersonGrid
                cards={mapPersons(persons.data?.results ?? [])}
                {...status}
            />
        );
    } else {
        const cards =
            type === 'movie'
                ? mapMovies(movies.data?.results ?? [])
                : mapTvShows(tvShows.data?.results ?? []);

        list = <MediaGrid cards={cards} {...status} />;
    }

    return (
        <div className={s.layout}>
            <div className={s.sidebar}>
                <SearchTabs
                    value={type}
                    counts={counts}
                    onChange={onTypeChange}
                />
            </div>
            <div className={s.content}>
                {list}
                {totalPages > 1 && (
                    <div className={s.paginationWrap}>
                        <Pagination
                            page={page}
                            count={totalPages}
                            onChange={(_, nextPage) => onPageChange(nextPage)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
