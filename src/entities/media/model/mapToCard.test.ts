import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { mapMovies, mapTvShows } from './mapToCard';

describe('mapMovies', () => {
    it('превращает ответ TMDB в пропсы карточки', () => {
        const cards = mapMovies([
            {
                id: 603,
                title: 'Матрица',
                poster_path: '/matrix.jpg',
                vote_average: 8.2,
            },
        ]);

        expect(cards).toEqual([
            {
                id: 603,
                title: 'Матрица',
                voteAverage: 8.2,
                posterUrl: `${TMDB_IMAGE_URL}/w500/matrix.jpg`,
            },
        ]);
    });

    it('не задаёт адрес: карточка фильма ведёт на /movie/:id по умолчанию', () => {
        const [card] = mapMovies([{ id: 603, title: 'Матрица' }]);

        expect(card).not.toHaveProperty('to');
    });

    it('подставляет локальную заглушку, если постера нет', () => {
        const [card] = mapMovies([{ id: 1, title: 'Без постера' }]);

        expect(card.posterUrl).toBe('/no-poster.svg');
    });

    it('пропускает записи без id', () => {
        const cards = mapMovies([
            { title: 'Без id' },
            { id: 2, title: 'Есть' },
        ]);

        expect(cards.map((card) => card.id)).toEqual([2]);
    });

    it('для пустого ответа возвращает пустой список', () => {
        expect(mapMovies([])).toEqual([]);
    });
});

describe('mapTvShows', () => {
    it('берёт название из name и ведёт на страницу сериала', () => {
        const cards = mapTvShows([
            {
                id: 1399,
                name: 'Игра престолов',
                poster_path: '/got.jpg',
                vote_average: 8.4,
            },
        ]);

        expect(cards).toEqual([
            {
                id: 1399,
                title: 'Игра престолов',
                voteAverage: 8.4,
                posterUrl: `${TMDB_IMAGE_URL}/w500/got.jpg`,
                to: '/tv/1399',
            },
        ]);
    });

    it('подставляет локальную заглушку, если постера нет', () => {
        const [card] = mapTvShows([{ id: 1, name: 'Без постера' }]);

        expect(card.posterUrl).toBe('/no-poster.svg');
    });

    it('пропускает записи без id', () => {
        const cards = mapTvShows([{ name: 'Без id' }, { id: 2, name: 'Есть' }]);

        expect(cards.map((card) => card.id)).toEqual([2]);
    });
});
