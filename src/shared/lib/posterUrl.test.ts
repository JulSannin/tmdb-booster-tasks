import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { posterUrl } from './posterUrl';

describe('posterUrl', () => {
    it('собирает адрес постера шириной 500', () => {
        expect(posterUrl('/abc.jpg')).toBe(`${TMDB_IMAGE_URL}/w500/abc.jpg`);
    });

    it.each([undefined, ''])('для %j отдаёт локальную заглушку', (path) => {
        expect(posterUrl(path)).toBe('/no-poster.svg');
    });
});
