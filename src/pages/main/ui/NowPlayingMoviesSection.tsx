import { useGet3MovieNowPlayingQuery } from '../api/api';
import { MovieCarouselSection } from '@/widgets/movie-carousel';
import { posterUrl } from '@/shared/lib';

export function NowPlayingMoviesSection() {
    const { data, isLoading, isFetching, isError } =
        useGet3MovieNowPlayingQuery({});

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
            title="Now Playing Movies"
            viewMoreHref="/movies/now-playing"
            movies={movies}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
