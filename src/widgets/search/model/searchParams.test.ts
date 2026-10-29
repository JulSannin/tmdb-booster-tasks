import { describe, expect, it } from 'vitest';
import { MAX_PAGE, parsePage, parseSearchType } from './searchParams';

describe('parseSearchType', () => {
    it.each(['movie', 'tv', 'person'] as const)(
        'оставляет допустимый тип %s',
        (type) => {
            expect(parseSearchType(type)).toBe(type);
        }
    );

    it.each([null, '', 'multi', 'TV', ' tv'])(
        'для %j возвращает movie',
        (raw) => {
            expect(parseSearchType(raw)).toBe('movie');
        }
    );
});

describe('parsePage', () => {
    it.each([
        ['1', 1],
        ['2', 2],
        [String(MAX_PAGE), MAX_PAGE],
    ])('читает номер страницы %s', (raw, expected) => {
        expect(parsePage(raw)).toBe(expected);
    });

    it('не пускает дальше последней страницы TMDB', () => {
        expect(parsePage(String(MAX_PAGE + 1))).toBe(MAX_PAGE);
        expect(parsePage('99999')).toBe(MAX_PAGE);
    });

    it.each([null, '', 'abc', '0', '-3', '1.5', 'NaN', 'Infinity'])(
        'для %j возвращает первую страницу',
        (raw) => {
            expect(parsePage(raw)).toBe(1);
        }
    );
});
