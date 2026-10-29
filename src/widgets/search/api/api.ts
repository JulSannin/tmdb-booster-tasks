import { baseApi as api } from '@/shared/api';

// Три эндпоинта поиска: фильмы, сериалы и люди. Вручную скопированы из
// shared/api/generated/tmdbApi.ts (useGet3SearchMovieQuery,
// useGet3SearchTvQuery, useGet3SearchPersonQuery) по той же причине, что и в
// widgets/media-carousel/api/api.ts — см. комментарий там. Типы урезаны до
// полей, которые нужны виджету.
// /search/multi вместо них не подходит: он не отдаёт ни total_results по
// каждому типу (из них берутся счётчики на вкладках), ни постраничную
// навигацию внутри типа
export type Get3SearchMovieApiResponse = {
    page?: number;
    results?: {
        id?: number;
        title?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3SearchMovieApiArg = {
    query: string;
    page?: number;
};

export type Get3SearchTvApiResponse = {
    page?: number;
    results?: {
        id?: number;
        name?: string;
        poster_path?: string;
        vote_average?: number;
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3SearchTvApiArg = {
    query: string;
    page?: number;
};

export type Get3SearchPersonApiResponse = {
    page?: number;
    results?: {
        id?: number;
        name?: string;
        // у людей без фото приходит null
        profile_path?: string | null;
        known_for_department?: string;
        // у фильмов название лежит в title, у сериалов — в name
        known_for?: { title?: string; name?: string }[];
    }[];
    total_pages?: number;
    total_results?: number;
};
export type Get3SearchPersonApiArg = {
    query: string;
    page?: number;
};

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3SearchMovie: build.query<
            Get3SearchMovieApiResponse,
            Get3SearchMovieApiArg
        >({
            query: (queryArg) => ({
                url: `/search/movie`,
                params: {
                    query: queryArg.query,
                    page: queryArg.page,
                },
            }),
        }),
        get3SearchTv: build.query<Get3SearchTvApiResponse, Get3SearchTvApiArg>({
            query: (queryArg) => ({
                url: `/search/tv`,
                params: {
                    query: queryArg.query,
                    page: queryArg.page,
                },
            }),
        }),
        get3SearchPerson: build.query<
            Get3SearchPersonApiResponse,
            Get3SearchPersonApiArg
        >({
            query: (queryArg) => ({
                url: `/search/person`,
                params: {
                    query: queryArg.query,
                    page: queryArg.page,
                },
            }),
        }),
    }),
});

export const {
    useGet3SearchMovieQuery,
    useGet3SearchTvQuery,
    useGet3SearchPersonQuery,
} = injectedRtkApi;
