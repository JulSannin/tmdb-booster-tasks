import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { mapCast, mapPersons } from './mapToCard';

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

describe('mapCast', () => {
    it('собирает карточку актёра: в подписи роль', () => {
        const cards = mapCast([
            {
                id: 6384,
                name: 'Киану Ривз',
                profile_path: '/keanu.jpg',
                character: 'Нео',
            },
        ]);

        expect(cards).toEqual([
            {
                id: 6384,
                name: 'Киану Ривз',
                photoUrl: `${TMDB_IMAGE_URL}/h632/keanu.jpg`,
                info: 'Нео',
            },
        ]);
    });

    it('подставляет заглушку, если у актёра нет фото', () => {
        const cards = mapCast([
            { id: 1, name: 'С null', profile_path: null },
            { id: 2, name: 'Без поля' },
        ]);

        expect(cards.map((card) => card.photoUrl)).toEqual([
            '/no-photo.svg',
            '/no-photo.svg',
        ]);
    });

    it('без роли оставляет info пустым', () => {
        const [card] = mapCast([{ id: 1, name: 'Эпизод' }]);

        expect(card.info).toBe('');
    });

    it('сохраняет порядок из титров', () => {
        const cards = mapCast([
            { id: 3, name: 'Третий по списку' },
            { id: 1, name: 'Первый по id' },
            { id: 2, name: 'Второй по id' },
        ]);

        expect(cards.map((card) => card.id)).toEqual([3, 1, 2]);
    });

    it('актёр с несколькими ролями остаётся один, с первой ролью', () => {
        const cards = mapCast([
            { id: 1, name: 'Двуликий', character: 'Главная роль' },
            { id: 2, name: 'Другой', character: 'Роль' },
            { id: 1, name: 'Двуликий', character: 'Эпизод' },
        ]);

        expect(cards.map((card) => [card.id, card.info])).toEqual([
            [1, 'Главная роль'],
            [2, 'Роль'],
        ]);
    });

    it('пропускает записи без id или без имени', () => {
        const cards = mapCast([
            { name: 'Без id' },
            { id: 2 },
            { id: 3, name: 'Есть' },
        ]);

        expect(cards.map((card) => card.id)).toEqual([3]);
    });
});
