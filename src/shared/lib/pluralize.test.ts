import { describe, expect, it } from 'vitest';
import { pluralize } from './pluralize';

const YEARS: [string, string, string] = ['год', 'года', 'лет'];

describe('pluralize', () => {
    it.each([
        [1, '1 год'],
        [2, '2 года'],
        [4, '4 года'],
        [5, '5 лет'],
        [0, '0 лет'],
        // 11–14 всегда «много», хотя кончаются на 1–4
        [11, '11 лет'],
        [12, '12 лет'],
        [14, '14 лет'],
        [21, '21 год'],
        [22, '22 года'],
        [25, '25 лет'],
        [101, '101 год'],
        [111, '111 лет'],
    ])('%i -> «%s»', (count, expected) => {
        expect(pluralize(count, YEARS)).toBe(expected);
    });
});
