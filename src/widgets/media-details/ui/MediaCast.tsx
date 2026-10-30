import { PersonCard, PersonCardSkeleton, mapCast } from '@/entities/person';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import {
    useGet3MovieByMovieIdCreditsQuery,
    useGet3TvBySeriesIdCreditsQuery,
} from '../api/api';
import type { BlockProps } from '../model/mediaType';
import { DetailsBlock, DetailsMessage } from './DetailsBlock';
import s from './MediaCast.module.css';

// Сколько актёров показываем. По нему же рисуется скелетон
const CAST_LIMIT = 6;

// Второй блок страницы: актёры в главных ролях с фото и ролью
export function MediaCast({ mediaType, id }: BlockProps) {
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: см. MediaInfo
    const movieQuery = useGet3MovieByMovieIdCreditsQuery(
        { movieId: id },
        { skip: !isMovie }
    );
    const tvQuery = useGet3TvBySeriesIdCreditsQuery(
        { seriesId: id },
        { skip: isMovie }
    );
    const { data, isLoading, isFetching, isError } = isMovie
        ? movieQuery
        : tvQuery;

    // TMDB отдаёт актёров по порядку в титрах, поэтому первые и есть главные
    const cards = mapCast(data?.cast ?? []).slice(0, CAST_LIMIT);

    return (
        <DetailsBlock title="В главных ролях">
            <DataWrapper
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
                skeleton={
                    <ul className={s.cast}>
                        {Array.from({ length: CAST_LIMIT }, (_, i) => (
                            <li key={i}>
                                <PersonCardSkeleton />
                            </li>
                        ))}
                    </ul>
                }
            >
                {cards.length > 0 ? (
                    <ul className={s.cast}>
                        {cards.map((card) => (
                            <li key={card.id}>
                                <PersonCard {...card} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <DetailsMessage>Список актёров пуст</DetailsMessage>
                )}
            </DataWrapper>
        </DetailsBlock>
    );
}
