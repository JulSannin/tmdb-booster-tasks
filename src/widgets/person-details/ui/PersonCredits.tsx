import { MediaGrid, mapMovies, mapTvShows } from '@/entities/media';
import { DetailsBlock, DetailsMessage } from '@/shared/ui/DetailsBlock';
import {
    useGet3PersonByPersonIdMovieCreditsQuery,
    useGet3PersonByPersonIdTvCreditsQuery,
} from '../api/api';
import { pickCredits } from '../model/pickCredits';

// Сколько работ показываем. У известных актёров их сотни; десять — два полных
// ряда сетки в пять колонок, столько же скелетонов рисует MediaGrid
const CREDITS_LIMIT = 10;

type Props = {
    // Какие работы показывает блок: фильмы или сериалы
    mediaType: 'movie' | 'tv';
    id: number;
};

// Второй и третий блоки страницы: самые известные фильмы (или сериалы)
// человека. Карточки ведут на страницы деталей
export function PersonCredits({ mediaType, id }: Props) {
    const isMovie = mediaType === 'movie';

    // Rules of Hooks: оба хука вызываются всегда, ненужный выключаем через
    // skip (так же сделано в блоках страницы деталей фильма)
    const movieQuery = useGet3PersonByPersonIdMovieCreditsQuery(
        { personId: id },
        { skip: !isMovie }
    );
    const tvQuery = useGet3PersonByPersonIdTvCreditsQuery(
        { personId: id },
        { skip: isMovie }
    );
    const { isLoading, isFetching, isError } = isMovie ? movieQuery : tvQuery;

    const cards = isMovie
        ? mapMovies(pickCredits(movieQuery.data, CREDITS_LIMIT))
        : mapTvShows(pickCredits(tvQuery.data, CREDITS_LIMIT));

    const isEmpty = !isLoading && !isError && cards.length === 0;

    return (
        <DetailsBlock title={isMovie ? 'Известные фильмы' : 'Известные ТВ-шоу'}>
            {isEmpty ? (
                <DetailsMessage>
                    {isMovie ? 'Фильмов не нашлось' : 'ТВ-шоу не нашлось'}
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
