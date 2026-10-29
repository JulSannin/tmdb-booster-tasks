import { useState } from 'react';
import { mapMovies, mapTvShows } from '@/entities/media';
import { useGet3MoviePopularQuery, useGet3TvPopularQuery } from '../api/api';
import type { MediaType } from './MediaTypeToggle';
import { MediaCarousel } from './MediaCarousel';

export function PopularCarousel() {
    // По умолчанию показываем фильмы
    const [mediaType, setMediaType] = useState<MediaType>('movie');
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключаем через
    // skip (так же сделано в MediaCategoryWidget). Данные неактивного типа
    // остаются в кэше, поэтому переключение туда-обратно не грузит заново
    const movieQuery = useGet3MoviePopularQuery({}, { skip: !isMovie });
    const tvQuery = useGet3TvPopularQuery({}, { skip: isMovie });
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = isMovie
        ? mapMovies(movieQuery.data?.results ?? [])
        : mapTvShows(tvQuery.data?.results ?? []);

    return (
        <MediaCarousel
            title={isMovie ? 'Popular Movies' : 'Popular TV Shows'}
            mediaType={mediaType}
            onMediaTypeChange={setMediaType}
            cards={cards.slice(0, 14)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
        />
    );
}
