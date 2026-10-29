import { baseApi as api } from '@/shared/api';

// Эндпоинт популярных людей. Вручную скопирован из
// shared/api/generated/tmdbApi.ts (useGet3PersonPopularQuery) по той же
// причине, что и в widgets/media-carousel/api/api.ts — см. комментарий там.
// Типы урезаны до полей, которые нужны странице
export type Get3PersonPopularApiResponse = {
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
};

export type Get3PersonPopularApiArg = {
    language?: string;
    page?: number;
};

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        get3PersonPopular: build.query<
            Get3PersonPopularApiResponse,
            Get3PersonPopularApiArg
        >({
            query: (queryArg) => ({
                url: `/person/popular`,
                params: {
                    language: queryArg.language,
                    page: queryArg.page,
                },
            }),
        }),
    }),
});

export const { useGet3PersonPopularQuery } = injectedRtkApi;
