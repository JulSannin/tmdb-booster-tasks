import { baseApi as api } from '@/shared/api';

export type Get3DiscoverMovieApiResponse = {
    page?: number;
    results?: {
        id?: number;
        title?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
    total_pages?: number;
};

export type Get3DiscoverMovieApiArg = {
    page?: number;
    sortBy?:
        | 'original_title.asc'
        | 'original_title.desc'
        | 'popularity.asc'
        | 'popularity.desc'
        | 'primary_release_date.asc'
        | 'primary_release_date.desc'
        | 'title.asc'
        | 'title.desc'
        | 'vote_average.asc'
        | 'vote_average.desc'
        | 'vote_count.asc'
        | 'vote_count.desc';
    'primary_release_date.gte'?: string;
    'primary_release_date.lte'?: string;
    'vote_average.gte'?: number;
    'vote_average.lte'?: number;
    'vote_count.gte'?: number;
    withGenres?: string;
};

export type Get3DiscoverTvApiResponse = {
    page?: number;
    results?: {
        id?: number;
        name?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
    total_pages?: number;
};

export type Get3DiscoverTvApiArg = {
    page?: number;
    sortBy?:
        | 'first_air_date.asc'
        | 'first_air_date.desc'
        | 'name.asc'
        | 'name.desc'
        | 'popularity.asc'
        | 'popularity.desc'
        | 'vote_average.asc'
        | 'vote_average.desc'
        | 'vote_count.asc'
        | 'vote_count.desc';
    'air_date.gte'?: string;
    'air_date.lte'?: string;
    'first_air_date.gte'?: string;
    'first_air_date.lte'?: string;
    'vote_average.gte'?: number;
    'vote_average.lte'?: number;
    'vote_count.gte'?: number;
    withGenres?: string;
};

export type Get3GenreMovieListApiResponse = {
    genres?: { id?: number; name?: string }[];
};

export type Get3GenreTvListApiResponse = {
    genres?: { id?: number; name?: string }[];
};

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3DiscoverMovie: build.query<
            Get3DiscoverMovieApiResponse,
            Get3DiscoverMovieApiArg
        >({
            query: (queryArg) => ({
                url: `/discover/movie`,
                params: {
                    page: queryArg.page,
                    sort_by: queryArg.sortBy,
                    'primary_release_date.gte':
                        queryArg['primary_release_date.gte'],
                    'primary_release_date.lte':
                        queryArg['primary_release_date.lte'],
                    'vote_average.gte': queryArg['vote_average.gte'],
                    'vote_average.lte': queryArg['vote_average.lte'],
                    'vote_count.gte': queryArg['vote_count.gte'],
                    with_genres: queryArg.withGenres,
                },
            }),
        }),
        get3DiscoverTv: build.query<
            Get3DiscoverTvApiResponse,
            Get3DiscoverTvApiArg
        >({
            query: (queryArg) => ({
                url: `/discover/tv`,
                params: {
                    page: queryArg.page,
                    sort_by: queryArg.sortBy,
                    'air_date.gte': queryArg['air_date.gte'],
                    'air_date.lte': queryArg['air_date.lte'],
                    'first_air_date.gte': queryArg['first_air_date.gte'],
                    'first_air_date.lte': queryArg['first_air_date.lte'],
                    'vote_average.gte': queryArg['vote_average.gte'],
                    'vote_average.lte': queryArg['vote_average.lte'],
                    'vote_count.gte': queryArg['vote_count.gte'],
                    with_genres: queryArg.withGenres,
                },
            }),
        }),
        get3GenreMovieList: build.query<Get3GenreMovieListApiResponse, void>({
            query: () => ({ url: `/genre/movie/list` }),
        }),
        get3GenreTvList: build.query<Get3GenreTvListApiResponse, void>({
            query: () => ({ url: `/genre/tv/list` }),
        }),
    }),
});

export const {
    useGet3DiscoverMovieQuery,
    useGet3DiscoverTvQuery,
    useGet3GenreMovieListQuery,
    useGet3GenreTvListQuery,
} = injectedRtkApi;
