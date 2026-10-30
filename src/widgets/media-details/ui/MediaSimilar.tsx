import { MediaGrid, mapMovies, mapTvShows } from '@/entities/media';
import {
    useGet3MovieByMovieIdSimilarQuery,
    useGet3TvBySeriesIdSimilarQuery,
} from '../api/api';
import type { BlockProps } from '../model/mediaType';
import { DetailsBlock, DetailsMessage } from './DetailsBlock';

// Сколько карточек показываем. TMDB отдаёт 20, нужно не меньше шести; десять —
// два полных ряда сетки в пять колонок, столько же скелетонов рисует MediaGrid
const SIMILAR_LIMIT = 10;

// Третий блок страницы: похожие фильмы (или сериалы)
export function MediaSimilar({ mediaType, id }: BlockProps) {
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: см. MediaInfo
    const movieQuery = useGet3MovieByMovieIdSimilarQuery(
        { movieId: id },
        { skip: !isMovie }
    );
    const tvQuery = useGet3TvBySeriesIdSimilarQuery(
        { seriesId: id },
        { skip: isMovie }
    );
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = (
        isMovie
            ? mapMovies(movieQuery.data?.results ?? [])
            : mapTvShows(tvQuery.data?.results ?? [])
    ).slice(0, SIMILAR_LIMIT);

    const isEmpty = !isLoading && !isError && cards.length === 0;

    return (
        <DetailsBlock title={isMovie ? 'Похожие фильмы' : 'Похожие ТВ-шоу'}>
            {isEmpty ? (
                <DetailsMessage>
                    {isMovie
                        ? 'Похожих фильмов не нашлось'
                        : 'Похожих ТВ-шоу не нашлось'}
                </DetailsMessage>
            ) : (
                <MediaGrid
                    cards={cards}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
                />
            )}
        </DetailsBlock>
    );
}
