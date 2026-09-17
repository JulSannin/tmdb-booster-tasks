import { baseApi as api } from '@/shared/api';

// Эндпоинты для секций главной страницы (Welcome Section — фон, плюс 4
// карусели: Popular/Top Rated/Upcoming/Now Playing). Вручную скопированы из
// shared/api/generated/tmdbApi.ts — по договорённости generated-клиент
// используется только как справочник, а не импортируется напрямую, каждый
// слайс копирует себе нужные эндпоинты

export type Get3MoviePopularApiResponse = /** status 200 200 */ {
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};

export type Get3MoviePopularApiArg = {
    language?: string;
    page?: number;
    /** ISO-3166-1 code */
    region?: string;
};

export type Get3MovieTopRatedApiResponse = /** status 200 200 */ {
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3MovieTopRatedApiArg = {
    language?: string;
    page?: number;
    /** ISO-3166-1 code */
    region?: string;
};

export type Get3MovieUpcomingApiResponse = /** status 200 200 */ {
    dates?: {
        maximum?: string;
        minimum?: string;
    };
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3MovieUpcomingApiArg = {
    language?: string;
    page?: number;
    /** ISO-3166-1 code */
    region?: string;
};

export type Get3MovieNowPlayingApiResponse = /** status 200 200 */ {
    dates?: {
        maximum?: string;
        minimum?: string;
    };
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3MovieNowPlayingApiArg = {
    language?: string;
    page?: number;
    /** ISO-3166-1 code */
    region?: string;
};

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3MoviePopular: build.query<
            Get3MoviePopularApiResponse,
            Get3MoviePopularApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/popular`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    region: queryArg.region,
                },
            }),
        }),
        get3MovieTopRated: build.query<
            Get3MovieTopRatedApiResponse,
            Get3MovieTopRatedApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/top_rated`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    region: queryArg.region,
                },
            }),
        }),
        get3MovieUpcoming: build.query<
            Get3MovieUpcomingApiResponse,
            Get3MovieUpcomingApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/upcoming`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    region: queryArg.region,
                },
            }),
        }),
        get3MovieNowPlaying: build.query<
            Get3MovieNowPlayingApiResponse,
            Get3MovieNowPlayingApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/now_playing`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    region: queryArg.region,
                },
            }),
        }),
    }),
});

export const {
    useGet3MoviePopularQuery,
    useGet3MovieNowPlayingQuery,
    useGet3MovieTopRatedQuery,
    useGet3MovieUpcomingQuery,
} = injectedRtkApi;
