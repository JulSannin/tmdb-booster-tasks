import { TMDB_IMAGE_URL } from '@/shared/config';

export function posterUrl(path?: string) {
    return path
        ? `${TMDB_IMAGE_URL}/w500${path}`
        : 'https://placehold.co/342x513?text=No+Poster';
}
