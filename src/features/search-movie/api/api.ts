import { baseApi as api } from '@/shared/api';

// Эндпоинт поиска фильмов по названию. Вручную скопирован из
// shared/api/generated/tmdbApi.ts (useGet3SearchMovieQuery) по той же
// причине, что и в pages/main/api/api.ts — см. комментарий там
export type Get3SearchMovieApiResponse = /** status 200 200 */ {
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
export type Get3SearchMovieApiArg = {
    query: string;
    includeAdult?: boolean;
    language?: string;
    primaryReleaseYear?: string;
    page?: number;
    region?: string;
    year?: string;
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
                    include_adult: queryArg.includeAdult,
                    language: queryArg.language,
                    primary_release_year: queryArg.primaryReleaseYear,
                    page: queryArg.page,
                    region: queryArg.region,
                    year: queryArg.year,
                },
            }),
        }),
    }),
});

export const { useGet3SearchMovieQuery } = injectedRtkApi;
