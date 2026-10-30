import { baseApi as api } from '@/shared/api';

// Эндпоинты страницы человека: он сам и его работы в фильмах (movie_credits) и
// сериалах (tv_credits). Вручную скопированы из shared/api/generated/tmdbApi.ts
// по той же причине, что и в widgets/media-carousel/api/api.ts — см. комментарий
// там. Типы урезаны до полей, которые нужны виджету

export type Get3PersonByPersonIdApiResponse = {
    id?: number;
    name?: string;
    // у людей без фото приходит null
    profile_path?: string | null;
    known_for_department?: string;
    // "YYYY-MM-DD"; null, если TMDB дату не знает. deathday есть только у умерших
    birthday?: string | null;
    deathday?: string | null;
    place_of_birth?: string | null;
    biography?: string;
};
export type Get3PersonByPersonIdApiArg = { personId: number };

// Запись о работе человека в фильме. В cast заполнено character (роль), в
// crew — job (должность), его виджет не читает
type MovieCredit = {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
    popularity?: number;
    character?: string;
};
export type Get3PersonByPersonIdMovieCreditsApiResponse = {
    cast?: MovieCredit[];
    crew?: MovieCredit[];
};
export type Get3PersonByPersonIdMovieCreditsApiArg = { personId: number };

type TvCredit = {
    id?: number;
    name?: string;
    poster_path?: string;
    vote_average?: number;
    popularity?: number;
    character?: string;
};
export type Get3PersonByPersonIdTvCreditsApiResponse = {
    cast?: TvCredit[];
    crew?: TvCredit[];
};
export type Get3PersonByPersonIdTvCreditsApiArg = { personId: number };

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3PersonByPersonId: build.query<
            Get3PersonByPersonIdApiResponse,
            Get3PersonByPersonIdApiArg
        >({
            query: (queryArg) => ({ url: `/person/${queryArg.personId}` }),
        }),
        get3PersonByPersonIdMovieCredits: build.query<
            Get3PersonByPersonIdMovieCreditsApiResponse,
            Get3PersonByPersonIdMovieCreditsApiArg
        >({
            query: (queryArg) => ({
                url: `/person/${queryArg.personId}/movie_credits`,
            }),
        }),
        get3PersonByPersonIdTvCredits: build.query<
            Get3PersonByPersonIdTvCreditsApiResponse,
            Get3PersonByPersonIdTvCreditsApiArg
        >({
            query: (queryArg) => ({
                url: `/person/${queryArg.personId}/tv_credits`,
            }),
        }),
    }),
});

export const {
    useGet3PersonByPersonIdQuery,
    useGet3PersonByPersonIdMovieCreditsQuery,
    useGet3PersonByPersonIdTvCreditsQuery,
} = injectedRtkApi;
