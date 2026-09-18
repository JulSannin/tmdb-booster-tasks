import { useGet3MovieUpcomingQuery } from '../api/api';
import { MovieCarouselSection } from '@/widgets/movie-carousel';
import { posterUrl } from '@/shared/lib';

export function UpcomingMoviesSection() {
    const { data, isLoading, isFetching, isError } = useGet3MovieUpcomingQuery(
        {}
    );

    const movies = (data?.results ?? [])
        .filter((m): m is typeof m & { id: number } => m.id !== undefined)
        .slice(0, 13)
        .map((m) => ({
            id: m.id,
            title: m.title,
            voteAverage: m.vote_average,
            posterUrl: posterUrl(m.poster_path),
        }));

    return (
        <MovieCarouselSection
            title="Upcoming Movies"
            viewMoreHref="/movies/upcoming"
            movies={movies}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
