import { RatingBadge } from '@/entities/media';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import {
    useGet3MovieByMovieIdQuery,
    useGet3TvBySeriesIdQuery,
} from '../api/api';
import {
    mapMovieDetails,
    mapTvDetails,
    type MediaInfoData,
} from '../model/mapDetails';
import type { BlockProps } from '../model/mediaType';
import { MediaInfoSkeleton } from './MediaInfoSkeleton';
import s from './MediaInfo.module.css';

// Первый блок страницы: постер, название, год, рейтинг, жанры,
// длительность и описание
export function MediaInfo({ mediaType, id }: BlockProps) {
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключаем через
    // skip (так же сделано в MediaCategoryWidget)
    const movieQuery = useGet3MovieByMovieIdQuery(
        { movieId: id },
        { skip: !isMovie }
    );
    const tvQuery = useGet3TvBySeriesIdQuery(
        { seriesId: id },
        { skip: isMovie }
    );
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const info = isMovie
        ? movieQuery.data && mapMovieDetails(movieQuery.data)
        : tvQuery.data && mapTvDetails(tvQuery.data);

    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            skeleton={<MediaInfoSkeleton />}
        >
            {info && <Info info={info} />}
        </DataWrapper>
    );
}

function Info({ info }: { info: MediaInfoData }) {
    const meta = [info.year, info.length].filter(Boolean).join(' · ');

    return (
        <div className={s.info}>
            <div className={s.posterBox}>
                <img
                    className={s.poster}
                    src={info.posterUrl}
                    alt={info.title}
                />
            </div>
            <div className={s.text}>
                <h1 className={s.title}>{info.title}</h1>
                <div className={s.meta}>
                    {info.voteAverage !== undefined && (
                        <RatingBadge value={info.voteAverage} />
                    )}
                    {meta && <span>{meta}</span>}
                </div>
                {info.genres.length > 0 && (
                    <ul className={s.genres}>
                        {info.genres.map((genre) => (
                            <li key={genre} className={s.genre}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                )}
                <p className={s.overview}>
                    {info.overview || 'Описание отсутствует'}
                </p>
            </div>
        </div>
    );
}
