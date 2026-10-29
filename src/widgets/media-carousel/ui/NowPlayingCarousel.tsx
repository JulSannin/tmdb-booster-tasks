import { useState } from 'react';
import { mapMovies, mapTvShows } from '@/entities/media';
import {
    useGet3MovieNowPlayingQuery,
    useGet3TvAiringTodayQuery,
} from '../api/api';
import type { MediaType } from './MediaTypeToggle';
import { MediaCarousel } from './MediaCarousel';

export function NowPlayingCarousel() {
    // По умолчанию показываем фильмы
    const [mediaType, setMediaType] = useState<MediaType>('movie');
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключает skip.
    // У сериалов в TMDB нет now_playing — ближайший аналог airing_today
    const movieQuery = useGet3MovieNowPlayingQuery({}, { skip: !isMovie });
    const tvQuery = useGet3TvAiringTodayQuery({}, { skip: isMovie });
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = isMovie
        ? mapMovies(movieQuery.data?.results ?? [])
        : mapTvShows(tvQuery.data?.results ?? []);

    return (
        <MediaCarousel
            title={isMovie ? 'Now Playing Movies' : 'Airing Today TV Shows'}
            mediaType={mediaType}
            onMediaTypeChange={setMediaType}
            cards={cards.slice(0, 14)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
