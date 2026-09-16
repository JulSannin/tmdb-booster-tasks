import { useSearchParams } from 'react-router';
import { SearchMovie, useGet3SearchMovieQuery } from '@/features/search-movie';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import s from './SearchPage.module.css';

// Страница поиска: та же форма, что и на главной, плюс результаты по query из URL
export function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const { data, isLoading, isFetching, isError } = useGet3SearchMovieQuery(
        { query },
        { skip: !query }
    );

    function handleSubmit(nextQuery: string) {
        setSearchParams(nextQuery ? { query: nextQuery } : {});
    }

    return (
        <div className={s.page}>
            <SearchMovie onSubmit={handleSubmit} />

            {!query && (
                <p className={s.message}>
                    Введите название фильма, чтобы начать поиск
                </p>
            )}

            {query && (
                <DataWrapper
                    isLoading={isLoading}
                    isError={isError}
                    isFetching={isFetching}
                >
                    {data?.results?.length ? (
                        <ul className={s.results}>
                            {data.results.map((movie) => (
                                <li key={movie.id}>{movie.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={s.message}>
                            {`No matches found for "${query}"`}
                        </p>
                    )}
                </DataWrapper>
            )}
        </div>
    );
}
