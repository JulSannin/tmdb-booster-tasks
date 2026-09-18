import { DataWrapper } from '@/shared/ui/DataWrapper';
import { MovieCard, MovieCardSkeleton } from '@/entities/movie';
import s from './MovieGrid.module.css';

type Movie = {
    id: number;
    title?: string;
    posterUrl: string;
    voteAverage?: number;
};

type Props = {
    movies: Movie[];
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
};

export function MovieGrid({ movies, isLoading, isFetching, isError }: Props) {
    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            skeleton={
                <div className={s.grid}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <MovieCardSkeleton key={i} />
                    ))}
                </div>
            }
        >
            <div className={s.grid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>
        </DataWrapper>
    );
}
