import { baseApi as api } from '@/shared/api';

// Эндпоинты для каруселей Popular/Top Rated/Upcoming/Now Playing — у каждой
// есть переключатель фильмы/ТВ-шоу. Вручную скопированы из
// shared/api/generated/tmdbApi.ts — по договорённости generated-клиент
// используется только как справочник, а не импортируется напрямую, каждый
// слайс копирует себе нужные эндпоинты. Хук популярных фильмов реэкспортирован
// из index.ts: он же нужен Welcome Section на главной (фон)

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

// У всех четырёх списков сериалов форма ответа одинаковая (в generated она
// продублирована под каждый эндпоинт), поэтому описана один раз
type TvListResponse = /** status 200 200 */ {
    page?: number;
    results?: {
        backdrop_path?: string;
        first_air_date?: string;
        genre_ids?: number[];
        id?: number;
        name?: string;
        origin_country?: string[];
        original_language?: string;
        original_name?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};

export type Get3TvPopularApiResponse = TvListResponse;
export type Get3TvPopularApiArg = {
    language?: string;
    page?: number;
};

export type Get3TvTopRatedApiResponse = TvListResponse;
export type Get3TvTopRatedApiArg = {
    language?: string;
    page?: number;
};

export type Get3TvOnTheAirApiResponse = TvListResponse;
export type Get3TvOnTheAirApiArg = {
    language?: string;
    page?: number;
    timezone?: string;
};

export type Get3TvAiringTodayApiResponse = TvListResponse;
export type Get3TvAiringTodayApiArg = {
    language?: string;
    page?: number;
    timezone?: string;
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
        get3TvPopular: build.query<
            Get3TvPopularApiResponse,
            Get3TvPopularApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/popular`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                },
            }),
        }),
        get3TvTopRated: build.query<
            Get3TvTopRatedApiResponse,
            Get3TvTopRatedApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/top_rated`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                },
            }),
        }),
        get3TvOnTheAir: build.query<
            Get3TvOnTheAirApiResponse,
            Get3TvOnTheAirApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/on_the_air`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    timezone: queryArg.timezone,
                },
            }),
        }),
        get3TvAiringToday: build.query<
            Get3TvAiringTodayApiResponse,
            Get3TvAiringTodayApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/airing_today`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                    timezone: queryArg.timezone,
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
    useGet3TvPopularQuery,
    useGet3TvTopRatedQuery,
    useGet3TvOnTheAirQuery,
    useGet3TvAiringTodayQuery,
} = injectedRtkApi;
