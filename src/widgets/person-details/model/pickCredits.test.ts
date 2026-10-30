import { describe, expect, it } from 'vitest';
import { pickCredits } from './pickCredits';

type Credit = { id?: number; popularity?: number; character?: string };

const ids = (credits: Credit[]) => credits.map((credit) => credit.id);

describe('pickCredits', () => {
    it('сортирует по популярности от большей к меньшей', () => {
        const cast = [
            { id: 1, popularity: 5 },
            { id: 2, popularity: 50 },
            { id: 3, popularity: 20 },
        ];

        expect(ids(pickCredits({ cast }, 10))).toEqual([2, 3, 1]);
    });

    it('оставляет не больше limit самых популярных', () => {
        const cast = Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            popularity: i + 1,
        }));

        expect(ids(pickCredits({ cast }, 3))).toEqual([12, 11, 10]);
    });

    it('при равной популярности сохраняет порядок TMDB', () => {
        const cast = [
            { id: 1, popularity: 7 },
            { id: 2, popularity: 7 },
            { id: 3, popularity: 7 },
        ];

        expect(ids(pickCredits({ cast }, 10))).toEqual([1, 2, 3]);
    });

    it('без популярности запись уходит в конец', () => {
        const cast = [{ id: 1 }, { id: 2, popularity: 3 }];

        expect(ids(pickCredits({ cast }, 10))).toEqual([2, 1]);
    });

    it('схлопывает записи с одним id и пропускает записи без id', () => {
        const cast = [
            { id: 1, popularity: 9, character: 'Роль 1' },
            { id: 1, popularity: 9, character: 'Роль 2' },
            { popularity: 99 },
            { id: 2, popularity: 1 },
        ];

        expect(pickCredits({ cast }, 10)).toEqual([
            { id: 1, popularity: 9, character: 'Роль 1' },
            { id: 2, popularity: 1 },
        ]);
    });

    it('не меняет исходный список', () => {
        const cast = [
            { id: 1, popularity: 1 },
            { id: 2, popularity: 2 },
        ];

        pickCredits({ cast }, 10);

        expect(ids(cast)).toEqual([1, 2]);
    });

    it.each([undefined, {}, { cast: [], crew: [] }])(
        'без работ (%j) возвращает пустой список',
        (credits) => {
            expect(pickCredits(credits, 10)).toEqual([]);
        }
    );

    describe('записи «Self» (человек играет самого себя)', () => {
        it.each([
            'Self',
            'Self - Host',
            'Self (archive footage)',
            'Himself',
            'Herself - Guest',
            'Themselves',
            'self',
        ])('«%s» не вытесняет настоящую роль', (character) => {
            const cast = [
                { id: 1, popularity: 100, character },
                { id: 2, popularity: 1, character: 'Нео' },
            ];

            expect(ids(pickCredits({ cast }, 10))).toEqual([2]);
        });

        it('роль, в названии которой есть похожее слово, остаётся', () => {
            const cast = [
                { id: 1, popularity: 1, character: 'Selfish Mouse' },
                { id: 2, popularity: 2, character: 'Мистер Himself-Smith' },
            ];

            expect(ids(pickCredits({ cast }, 10))).toEqual([2, 1]);
        });

        it('если ролей нет, но есть работа за кадром, берёт её', () => {
            const cast = [{ id: 1, popularity: 100, character: 'Self' }];
            const crew = [
                { id: 2, popularity: 10 },
                { id: 3, popularity: 20 },
            ];

            expect(ids(pickCredits({ cast, crew }, 10))).toEqual([3, 2]);
        });

        it('если нет ни ролей, ни работы за кадром, остаются записи «Self»', () => {
            const cast = [
                { id: 1, popularity: 1, character: 'Self' },
                { id: 2, popularity: 2, character: 'Himself' },
            ];

            expect(ids(pickCredits({ cast }, 10))).toEqual([2, 1]);
        });
    });

    describe('работа за кадром (crew)', () => {
        it('у режиссёра без ролей берёт crew', () => {
            const crew = [
                { id: 1, popularity: 4 },
                { id: 2, popularity: 8 },
            ];

            expect(ids(pickCredits({ cast: [], crew }, 10))).toEqual([2, 1]);
        });

        it('схлопывает несколько должностей в одном фильме', () => {
            // Режиссёр, сценарист и продюсер одного фильма: три записи, один id
            const crew = [
                { id: 1, popularity: 4 },
                { id: 1, popularity: 4 },
                { id: 1, popularity: 4 },
                { id: 2, popularity: 3 },
            ];

            expect(ids(pickCredits({ crew }, 10))).toEqual([1, 2]);
        });

        it('если роли есть, crew не примешивается', () => {
            const cast = [{ id: 1, popularity: 1, character: 'Нео' }];
            const crew = [{ id: 2, popularity: 100 }];

            expect(ids(pickCredits({ cast, crew }, 10))).toEqual([1]);
        });
    });
});
