import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { profileUrl } from './profileUrl';

describe('profileUrl', () => {
    it('собирает адрес фото высотой 632', () => {
        expect(profileUrl('/abc.jpg')).toBe(`${TMDB_IMAGE_URL}/h632/abc.jpg`);
    });

    it.each([undefined, null, ''])(
        'для %j отдаёт локальную заглушку',
        (path) => {
            expect(profileUrl(path)).toBe('/no-photo.svg');
        }
    );
});
