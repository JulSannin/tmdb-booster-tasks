export type Category = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';

function isoDate(offsetDays: number) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().slice(0, 10);
}

export function getMovieCategoryPreset(category: Category) {
    switch (category) {
        case 'popular':
            return { sortBy: 'popularity.desc' as const };
        case 'top_rated':
            return {
                sortBy: 'vote_average.desc' as const,
                'vote_count.gte': 200,
            };
        case 'upcoming':
            return {
                sortBy: 'primary_release_date.asc' as const,
                'primary_release_date.gte': isoDate(0),
            };
        case 'now_playing':
            return {
                sortBy: 'popularity.desc' as const,
                'primary_release_date.gte': isoDate(-30),
                'primary_release_date.lte': isoDate(0),
            };
    }
}

export function getTvCategoryPreset(category: Category) {
    switch (category) {
        case 'popular':
            return { sortBy: 'popularity.desc' as const };
        case 'top_rated':
            return {
                sortBy: 'vote_average.desc' as const,
                'vote_count.gte': 200,
            };
        case 'upcoming':
            return {
                sortBy: 'first_air_date.asc' as const,
                'first_air_date.gte': isoDate(0),
            };
        case 'now_playing':
            return {
                sortBy: 'popularity.desc' as const,
                'air_date.gte': isoDate(0),
                'air_date.lte': isoDate(0),
            };
    }
}
