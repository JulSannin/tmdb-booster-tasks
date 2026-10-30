import { describe, expect, it } from 'vitest';
import { parseId } from './parseId';

describe('parseId', () => {
    it('читает положительное целое', () => {
        expect(parseId('603')).toBe(603);
    });

    it.each([
        ['нет параметра', undefined],
        ['пустая строка', ''],
        ['буквы', 'abc'],
        ['число с буквами', '12abc'],
        ['отрицательное', '-5'],
        ['ноль', '0'],
        ['дробное', '1.5'],
        ['экспонента', '1e3'],
        ['с пробелом', ' 5'],
        ['больше безопасного целого', '99999999999999999999'],
    ])('%s -> null', (_name, value) => {
        expect(parseId(value)).toBeNull();
    });
});
