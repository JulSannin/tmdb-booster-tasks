import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { TMDB_BASE_URL } from '@/shared/config';
import { renderWithProviders, server } from '@/shared/test';
import { PersonCredits } from './PersonCredits';

const credit = { id: 1, poster_path: '/poster.jpg', vote_average: 7 };

// Страница человека и так просит оба списка работ, поэтому лишний запрос блока
// (без skip у ненужного хука) на ней не заметен: у него те же аргументы, и
// RTK Query делает один запрос на двоих. Блок, нарисованный отдельно, виден
describe('PersonCredits', () => {
    it.each([
        ['movie', 'get3PersonByPersonIdMovieCredits', 'Фильм'],
        ['tv', 'get3PersonByPersonIdTvCredits', 'Сериал'],
    ] as const)(
        'блок «%s» просит только свой список (%s)',
        async (mediaType, endpoint, title) => {
            server.use(
                http.get(`${TMDB_BASE_URL}/person/:id/movie_credits`, () =>
                    HttpResponse.json({ cast: [{ ...credit, title: 'Фильм' }] })
                ),
                http.get(`${TMDB_BASE_URL}/person/:id/tv_credits`, () =>
                    HttpResponse.json({ cast: [{ ...credit, name: 'Сериал' }] })
                )
            );
            const { store } = renderWithProviders(
                <PersonCredits mediaType={mediaType} id={4000} />
            );

            await screen.findByRole('img', { name: title });

            // Запрос попадает в кэш RTK Query сразу, а до обработчика msw
            // доходит позже: смотрим в кэш. Ключ — имя эндпоинта и аргументы
            const requested = Object.keys(store.getState().baseApi.queries).map(
                (key) => key.split('(')[0]
            );

            expect(requested).toEqual([endpoint]);
        }
    );
});
