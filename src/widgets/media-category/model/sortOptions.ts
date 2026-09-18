import type { SortOption } from '@/features/sort-movies';

export const MOVIE_SORT_OPTIONS: SortOption[] = [
    { value: 'popularity.desc', label: 'По популярности (убывание)' },
    { value: 'popularity.asc', label: 'По популярности (возрастание)' },
    { value: 'vote_average.desc', label: 'По рейтингу (убывание)' },
    { value: 'vote_average.asc', label: 'По рейтингу (возрастание)' },
    { value: 'primary_release_date.desc', label: 'По дате выпуска (убывание)' },
    {
        value: 'primary_release_date.asc',
        label: 'По дате выпуска (возрастание)',
    },
    { value: 'title.asc', label: 'По названию (А-Я)' },
    { value: 'title.desc', label: 'По названию (Я-А)' },
];

export const TV_SORT_OPTIONS: SortOption[] = [
    { value: 'popularity.desc', label: 'По популярности (убывание)' },
    { value: 'popularity.asc', label: 'По популярности (возрастание)' },
    { value: 'vote_average.desc', label: 'По рейтингу (убывание)' },
    { value: 'vote_average.asc', label: 'По рейтингу (возрастание)' },
    { value: 'first_air_date.desc', label: 'По дате выпуска (убывание)' },
    { value: 'first_air_date.asc', label: 'По дате выпуска (возрастание)' },
    { value: 'name.asc', label: 'По названию (А-Я)' },
    { value: 'name.desc', label: 'По названию (Я-А)' },
];
