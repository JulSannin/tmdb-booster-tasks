import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { mapPersons } from './mapToCard';

describe('mapPersons', () => {
    it('собирает карточку человека', () => {
        const cards = mapPersons([
            {
                id: 6384,
                name: 'Киану Ривз',
                profile_path: '/keanu.jpg',
                known_for: [{ title: 'Матрица' }, { name: 'Сериал' }],
            },
        ]);

        expect(cards).toEqual([
            {
                id: 6384,
                name: 'Киану Ривз',
                photoUrl: `${TMDB_IMAGE_URL}/h632/keanu.jpg`,
                info: 'Матрица, Сериал',
            },
        ]);
    });

    it('подставляет заглушку, если у человека нет фото', () => {
        const cards = mapPersons([
            { id: 1, name: 'С null', profile_path: null },
            { id: 2, name: 'Без поля' },
        ]);

        expect(cards.map((card) => card.photoUrl)).toEqual([
            '/no-photo.svg',
            '/no-photo.svg',
        ]);
    });

    it('показывает не больше трёх работ', () => {
        const [card] = mapPersons([
            {
                id: 1,
                name: 'Много работ',
                known_for: [
                    { title: 'A' },
                    { title: 'B' },
                    { title: 'C' },
                    { title: 'D' },
                ],
            },
        ]);

        expect(card.info).toBe('A, B, C');
    });

    it('работы без названия не занимают места среди трёх', () => {
        const [card] = mapPersons([
            {
                id: 1,
                name: 'Есть пустые',
                known_for: [
                    {},
                    { title: 'A' },
                    { title: 'B' },
                    { title: 'C' },
                    { title: 'D' },
                ],
            },
        ]);

        expect(card.info).toBe('A, B, C');
    });

    it('без работ показывает направление', () => {
        const [card] = mapPersons([
            {
                id: 1,
                name: 'Режиссёр',
                known_for: [],
                known_for_department: 'Directing',
            },
        ]);

        expect(card.info).toBe('Directing');
    });

    it('без работ и направления оставляет info пустым', () => {
        const [card] = mapPersons([{ id: 1, name: 'Никто' }]);

        expect(card.info).toBe('');
    });

    it('пропускает записи без id или без имени', () => {
        const cards = mapPersons([
            { name: 'Без id' },
            { id: 2 },
            { id: 3, name: 'Есть' },
        ]);

        expect(cards.map((card) => card.id)).toEqual([3]);
    });
});
