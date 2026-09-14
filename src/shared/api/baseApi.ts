import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VITE_TMDB_READ_ACCESS_TOKEN } from '@/shared/config';

// Базовый RTK Query API. Сам по себе не содержит запросов (endpoints пустые) —
// конкретные запросы к TMDB добавляются отдельно через generated/tmdbApi.ts
// (codegen из OpenAPI-схемы), который "расширяет" этот baseApi.
export const baseApi = createApi({
    // Ключ, под которым кэш этого API лежит в Redux-сторе
    reducerPath: 'baseApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        // Добавляется ко всем запросам этого API автоматически
        prepareHeaders: (headers) => {
            headers.set(
                'Authorization',
                `Bearer ${VITE_TMDB_READ_ACCESS_TOKEN}`
            );

            headers.set('accept', 'application/json');

            return headers;
        },
    }),

    // Пока пусто — endpoints добавляются через injectEndpoints в codegen-файле
    endpoints: () => ({}),
});
