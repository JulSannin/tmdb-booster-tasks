import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Award } from './awards';
import {
    filterAwards,
    getDefaultQuery,
    isSameQuery,
    type AwardsQuery,
} from './filterAwards';

// Порядок в массиве — «по популярности»: так список идёт в model/awards.ts.
// У oscar и jussi дата церемонии одна, на них проверяется стабильность сортировки
const awards: Award[] = [
    { id: 'oscar', name: 'Academy Awards', latestCeremony: '2026-03-15' },
    { id: 'globes', name: 'Golden Globes', latestCeremony: '2026-01-11' },
    { id: 'warsaw', name: 'Warsaw Festival', latestCeremony: '2026-10-09' },
    { id: 'jussi', name: 'Jussi Awards', latestCeremony: '2026-03-15' },
];

const noLimits: AwardsQuery = { sort: 'popularity.desc', from: '', to: '' };

const ids = (list: Award[]) => list.map((award) => award.id);

describe('filterAwards', () => {
    it('по умолчанию оставляет порядок по популярности', () => {
        expect(ids(filterAwards(awards, noLimits))).toEqual([
            'oscar',
            'globes',
            'warsaw',
            'jussi',
        ]);
    });

    it('popularity.asc разворачивает список', () => {
        const query = { ...noLimits, sort: 'popularity.asc' };

        expect(ids(filterAwards(awards, query))).toEqual([
            'jussi',
            'warsaw',
            'globes',
            'oscar',
        ]);
    });

    it('latest_ceremony.desc ставит свежие церемонии первыми', () => {
        const query = { ...noLimits, sort: 'latest_ceremony.desc' };

        // oscar и jussi с одной датой остаются в порядке популярности
        expect(ids(filterAwards(awards, query))).toEqual([
            'warsaw',
            'oscar',
            'jussi',
            'globes',
        ]);
    });

    it('latest_ceremony.asc ставит старые церемонии первыми', () => {
        const query = { ...noLimits, sort: 'latest_ceremony.asc' };

        expect(ids(filterAwards(awards, query))).toEqual([
            'globes',
            'oscar',
            'jussi',
            'warsaw',
        ]);
    });

    it('неизвестную сортировку трактует как сортировку по умолчанию', () => {
        const query = { ...noLimits, sort: 'name.asc' };

        expect(ids(filterAwards(awards, query))).toEqual(ids(awards));
    });

    it('границы дат включают крайние дни', () => {
        const query = { ...noLimits, from: '2026-03-15', to: '2026-10-09' };

        expect(ids(filterAwards(awards, query))).toEqual([
            'oscar',
            'warsaw',
            'jussi',
        ]);
    });

    it('пустая граница не ограничивает с этой стороны', () => {
        expect(
            ids(filterAwards(awards, { ...noLimits, from: '2026-10-01' }))
        ).toEqual(['warsaw']);
        expect(
            ids(filterAwards(awards, { ...noLimits, to: '2026-01-31' }))
        ).toEqual(['globes']);
    });

    it('не меняет исходный список', () => {
        const before = ids(awards);

        for (const sort of [
            'popularity.asc',
            'latest_ceremony.desc',
            'latest_ceremony.asc',
        ]) {
            filterAwards(awards, { ...noLimits, sort });
        }

        expect(ids(awards)).toEqual(before);
    });
});

describe('getDefaultQuery', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('для popular не ограничивает даты и сортирует по популярности', () => {
        expect(getDefaultQuery('popular')).toEqual({
            sort: 'popularity.desc',
            from: '',
            to: '',
        });
    });

    it('для upcoming берёт два месяца вперёд, начиная со вчера', () => {
        // Полдень по местному времени: дата не зависит от часового пояса
        vi.setSystemTime(new Date(2026, 9, 14, 12));

        expect(getDefaultQuery('upcoming')).toEqual({
            sort: 'latest_ceremony.asc',
            from: '2026-10-13',
            to: '2026-12-13',
        });
    });

    it.each([
        {
            name: '31 декабря + 2 месяца — это 28 февраля, а не 3 марта',
            today: new Date(2026, 0, 1, 12),
            from: '2025-12-31',
            to: '2026-02-28',
        },
        {
            name: 'в високосный год конец окна — 29 февраля',
            today: new Date(2028, 0, 1, 12),
            from: '2027-12-31',
            to: '2028-02-29',
        },
    ])('upcoming: $name', ({ today, from, to }) => {
        vi.setSystemTime(today);

        expect(getDefaultQuery('upcoming')).toMatchObject({ from, to });
    });
});

describe('isSameQuery', () => {
    it('равны, когда совпадают все три поля', () => {
        expect(isSameQuery(noLimits, { ...noLimits })).toBe(true);
    });

    it.each(['sort', 'from', 'to'] as const)(
        'различает запросы, у которых отличается поле %s',
        (field) => {
            expect(isSameQuery(noLimits, { ...noLimits, [field]: 'x' })).toBe(
                false
            );
        }
    );
});
