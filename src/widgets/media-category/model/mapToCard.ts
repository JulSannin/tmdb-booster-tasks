import { posterUrl } from '@/shared/lib';

export function mapMovies(
    results: {
        id?: number;
        title?: string;
        poster_path?: string;
        vote_average?: number;
    }[]
) {
    return results
        .filter((m): m is typeof m & { id: number } => m.id !== undefined)
        .map((m) => ({
            id: m.id,
            title: m.title,
            voteAverage: m.vote_average,
            posterUrl: posterUrl(m.poster_path),
        }));
}

export function mapTvShows(
    results: {
        id?: number;
        name?: string;
        poster_path?: string;
        vote_average?: number;
    }[]
) {
    return results
        .filter((s): s is typeof s & { id: number } => s.id !== undefined)
        .map((s) => ({
            id: s.id,
            title: s.name,
            voteAverage: s.vote_average,
            posterUrl: posterUrl(s.poster_path),
        }));
}
