import { useSearchParams } from 'react-router';
import { Pagination } from '@mui/material';
import { MovieFilters, type MovieFiltersValue } from './MovieFilters';
import { MovieGrid } from './MovieGrid';
import {
    useGet3DiscoverMovieQuery,
    useGet3DiscoverTvQuery,
    useGet3GenreMovieListQuery,
    useGet3GenreTvListQuery,
    type Get3DiscoverMovieApiArg,
    type Get3DiscoverTvApiArg,
} from '../api/api';
import { MOVIE_SORT_OPTIONS, TV_SORT_OPTIONS } from '../model/sortOptions';
import {
    getMovieCategoryPreset,
    getTvCategoryPreset,
    type Category,
} from '../model/categoryPresets';
import { mapMovies, mapTvShows } from '../model/mapToCard';
import s from './MediaCategoryWidget.module.css';

const CATEGORY_LABELS: Record<Category, string> = {
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming',
    now_playing: 'Now Playing',
};

type Props = { mediaType: 'movie' | 'tv'; defaultCategory: Category };

export function MediaCategoryWidget({ mediaType, defaultCategory }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Категория переключается навигацией по шапке (реальный роут), а не
    // внутри виджета — тут она всегда равна тому, что передал defaultCategory
    const category = defaultCategory;
    const page = Number(searchParams.get('page') ?? 1);
    const filters: MovieFiltersValue = {
        sortBy: searchParams.get('sort_by') ?? '',
        ratingRange: [
            Number(searchParams.get('rating_gte') ?? 0),
            Number(searchParams.get('rating_lte') ?? 10),
        ],
        genres: (searchParams.get('genres') ?? '')
            .split(',')
            .filter(Boolean)
            .map(Number),
    };

    function updateFilters(next: MovieFiltersValue) {
        setSearchParams({
            sort_by: next.sortBy,
            rating_gte: String(next.ratingRange[0]),
            rating_lte: String(next.ratingRange[1]),
            genres: next.genres.join(','),
            page: '1',
        });
    }
    function resetFilters() {
        setSearchParams({});
    }
    function changePage(nextPage: number) {
        setSearchParams((prev) => {
            prev.set('page', String(nextPage));
            return prev;
        });
    }

    const isMovie = mediaType === 'movie';

    const moviePreset = getMovieCategoryPreset(category);
    const tvPreset = getTvCategoryPreset(category);
    // Единая точка, где решается "movie или tv" для всего, что ниже не
    // завязано на вызов хука (сами хуки Rules of Hooks запрещает выбирать
    // динамически — их приходится звать оба явно, см. ниже)
    const activePreset = isMovie ? moviePreset : tvPreset;
    const activeSortOptions = isMovie ? MOVIE_SORT_OPTIONS : TV_SORT_OPTIONS;
    const resolvedSortBy = filters.sortBy || activePreset.sortBy;

    // Rules of Hooks не разрешают вызывать хук условно — поэтому оба
    // жанровых хука дёргаются всегда, а ненужный просто выключается через skip
    const movieGenres = useGet3GenreMovieListQuery(undefined, {
        skip: !isMovie,
    });
    const tvGenres = useGet3GenreTvListQuery(undefined, {
        skip: isMovie,
    });
    const activeGenres = isMovie ? movieGenres.data : tvGenres.data;
    const genreOptions = (activeGenres?.genres ?? []).filter(
        (g): g is { id: number; name: string } =>
            g.id !== undefined && g.name !== undefined
    );

    // Та же логика с discover-запросами
    const movieQuery = useGet3DiscoverMovieQuery(
        {
            ...moviePreset,
            page,
            sortBy: resolvedSortBy as Get3DiscoverMovieApiArg['sortBy'],
            'vote_average.gte': filters.ratingRange[0],
            'vote_average.lte': filters.ratingRange[1],
            withGenres: filters.genres.length
                ? filters.genres.join('|')
                : undefined,
        },
        { skip: !isMovie }
    );
    const tvQuery = useGet3DiscoverTvQuery(
        {
            ...tvPreset,
            page,
            sortBy: resolvedSortBy as Get3DiscoverTvApiArg['sortBy'],
            'vote_average.gte': filters.ratingRange[0],
            'vote_average.lte': filters.ratingRange[1],
            withGenres: filters.genres.length
                ? filters.genres.join('|')
                : undefined,
        },
        { skip: isMovie }
    );
    const activeQuery = isMovie ? movieQuery : tvQuery;

    const { isLoading, isFetching, isError } = activeQuery;
    const totalPages = activeQuery.data?.total_pages ?? 1;
    // Маппинг результатов оставляю отдельной веткой (не через activeQuery) —
    // movie- и tv-формы результатов TMDB разные (title/name и т.д.), общий
    // union тут только всё усложнил бы
    const movies = isMovie
        ? mapMovies(movieQuery.data?.results ?? [])
        : mapTvShows(tvQuery.data?.results ?? []);

    const title = `${CATEGORY_LABELS[category]} ${isMovie ? 'Movies' : 'TV Shows'}`;

    return (
        <div className={s.page}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.content}>
                <MovieFilters
                    sortOptions={activeSortOptions}
                    genreOptions={genreOptions}
                    value={{ ...filters, sortBy: resolvedSortBy }}
                    onChange={updateFilters}
                    onReset={resetFilters}
                />
                <div className={s.grid}>
                    <MovieGrid
                        movies={movies}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                    />
                </div>
            </div>
            <div className={s.paginationWrap}>
                <Pagination
                    page={page}
                    count={totalPages}
                    onChange={(_, nextPage) => changePage(nextPage)}
                />
            </div>
        </div>
    );
}
