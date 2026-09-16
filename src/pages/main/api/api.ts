import { baseApi as api } from '@/shared/api';

// Хук для Welcome Section: список популярных фильмов, из которых на главной
// случайно выбирается фон. Тот же эндпоинт уже есть в
// shared/api/generated/tmdbApi.ts (useGet3MoviePopularQuery)

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
    }),
});

export const { useGet3MoviePopularQuery } = injectedRtkApi;
