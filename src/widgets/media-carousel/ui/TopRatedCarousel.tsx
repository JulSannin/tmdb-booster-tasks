import { useState } from 'react';
import { mapMovies, mapTvShows } from '@/entities/media';
import { useGet3MovieTopRatedQuery, useGet3TvTopRatedQuery } from '../api/api';
import type { MediaType } from './MediaTypeToggle';
import { MediaCarousel } from './MediaCarousel';

export function TopRatedCarousel() {
    // По умолчанию показываем фильмы
    const [mediaType, setMediaType] = useState<MediaType>('movie');
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключает skip
    const movieQuery = useGet3MovieTopRatedQuery({}, { skip: !isMovie });
    const tvQuery = useGet3TvTopRatedQuery({}, { skip: isMovie });
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = isMovie
        ? mapMovies(movieQuery.data?.results ?? [])
        : mapTvShows(tvQuery.data?.results ?? []);

    return (
        <MediaCarousel
            title={isMovie ? 'Top Rated Movies' : 'Top Rated TV Shows'}
            mediaType={mediaType}
            onMediaTypeChange={setMediaType}
            cards={cards.slice(0, 14)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
