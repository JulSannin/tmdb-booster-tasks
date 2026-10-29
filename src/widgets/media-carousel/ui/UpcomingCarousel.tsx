import { useState } from 'react';
import { mapMovies, mapTvShows } from '@/entities/media';
import { useGet3MovieUpcomingQuery, useGet3TvOnTheAirQuery } from '../api/api';
import type { MediaType } from './MediaTypeToggle';
import { MediaCarousel } from './MediaCarousel';

export function UpcomingCarousel() {
    // По умолчанию показываем фильмы
    const [mediaType, setMediaType] = useState<MediaType>('movie');
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключает skip.
    // У сериалов в TMDB нет upcoming — ближайший аналог on_the_air (выходят в
    // ближайшие 7 дней)
    const movieQuery = useGet3MovieUpcomingQuery({}, { skip: !isMovie });
    const tvQuery = useGet3TvOnTheAirQuery({}, { skip: isMovie });
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = isMovie
        ? mapMovies(movieQuery.data?.results ?? [])
        : mapTvShows(tvQuery.data?.results ?? []);

    return (
        <MediaCarousel
            title={isMovie ? 'Upcoming Movies' : 'Upcoming TV Shows'}
            mediaType={mediaType}
            onMediaTypeChange={setMediaType}
            cards={cards.slice(0, 14)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
