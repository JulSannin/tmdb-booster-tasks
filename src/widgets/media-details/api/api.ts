import { baseApi as api } from '@/shared/api';

// Эндпоинты страницы деталей: сам фильм/сериал, актёры (credits) и похожие
// (similar). Вручную скопированы из shared/api/generated/tmdbApi.ts по той же
// причине, что и в widgets/media-carousel/api/api.ts — см. комментарий там.
// Типы урезаны до полей, которые нужны виджету

type Genre = { id?: number; name?: string };

type CastMember = {
    id?: number;
    name?: string;
    // у актёров без фото приходит null
    profile_path?: string | null;
    character?: string;
};

export type Get3MovieByMovieIdApiResponse = {
    id?: number;
    title?: string;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    // минуты
    runtime?: number;
    genres?: Genre[];
    vote_average?: number;
};
export type Get3MovieByMovieIdApiArg = { movieId: number };

export type Get3MovieByMovieIdCreditsApiResponse = { cast?: CastMember[] };
export type Get3MovieByMovieIdCreditsApiArg = { movieId: number };

export type Get3MovieByMovieIdSimilarApiResponse = {
    results?: {
        id?: number;
        title?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
};
export type Get3MovieByMovieIdSimilarApiArg = { movieId: number };

export type Get3TvBySeriesIdApiResponse = {
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    first_air_date?: string;
    number_of_seasons?: number;
    number_of_episodes?: number;
    genres?: Genre[];
    vote_average?: number;
};
export type Get3TvBySeriesIdApiArg = { seriesId: number };

export type Get3TvBySeriesIdCreditsApiResponse = { cast?: CastMember[] };
export type Get3TvBySeriesIdCreditsApiArg = { seriesId: number };

export type Get3TvBySeriesIdSimilarApiResponse = {
    results?: {
        id?: number;
        name?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
};
export type Get3TvBySeriesIdSimilarApiArg = { seriesId: number };

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3MovieByMovieId: build.query<
            Get3MovieByMovieIdApiResponse,
            Get3MovieByMovieIdApiArg
        >({
            query: (queryArg) => ({ url: `/movie/${queryArg.movieId}` }),
        }),
        get3MovieByMovieIdCredits: build.query<
            Get3MovieByMovieIdCreditsApiResponse,
            Get3MovieByMovieIdCreditsApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/${queryArg.movieId}/credits`,
            }),
        }),
        get3MovieByMovieIdSimilar: build.query<
            Get3MovieByMovieIdSimilarApiResponse,
            Get3MovieByMovieIdSimilarApiArg
        >({
            query: (queryArg) => ({
                url: `/movie/${queryArg.movieId}/similar`,
            }),
        }),
        get3TvBySeriesId: build.query<
            Get3TvBySeriesIdApiResponse,
            Get3TvBySeriesIdApiArg
        >({
            query: (queryArg) => ({ url: `/tv/${queryArg.seriesId}` }),
        }),
        get3TvBySeriesIdCredits: build.query<
            Get3TvBySeriesIdCreditsApiResponse,
            Get3TvBySeriesIdCreditsApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/${queryArg.seriesId}/credits`,
            }),
        }),
        get3TvBySeriesIdSimilar: build.query<
            Get3TvBySeriesIdSimilarApiResponse,
            Get3TvBySeriesIdSimilarApiArg
        >({
            query: (queryArg) => ({
                url: `/tv/${queryArg.seriesId}/similar`,
            }),
        }),
    }),
});

export const {
    useGet3MovieByMovieIdQuery,
    useGet3MovieByMovieIdCreditsQuery,
    useGet3MovieByMovieIdSimilarQuery,
    useGet3TvBySeriesIdQuery,
    useGet3TvBySeriesIdCreditsQuery,
    useGet3TvBySeriesIdSimilarQuery,
} = injectedRtkApi;
