import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getMovieCategoryPreset, getTvCategoryPreset } from './categoryPresets';

describe('пресеты категорий', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        // Полдень по UTC: дата в ISO не уезжает на соседний день ни в одном
        // часовом поясе
        vi.setSystemTime(new Date('2026-10-14T12:00:00Z'));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe('фильмы', () => {
        it('popular сортирует по популярности', () => {
            expect(getMovieCategoryPreset('popular')).toEqual({
                sortBy: 'popularity.desc',
            });
        });

        it('top_rated отсекает фильмы с малым числом оценок', () => {
            expect(getMovieCategoryPreset('top_rated')).toEqual({
                sortBy: 'vote_average.desc',
                'vote_count.gte': 200,
            });
        });

        it('upcoming берёт релизы начиная с сегодняшнего дня', () => {
            expect(getMovieCategoryPreset('upcoming')).toEqual({
                sortBy: 'primary_release_date.asc',
                'primary_release_date.gte': '2026-10-14',
            });
        });

        it('now_playing берёт релизы последних 30 дней', () => {
            expect(getMovieCategoryPreset('now_playing')).toEqual({
                sortBy: 'popularity.desc',
                'primary_release_date.gte': '2026-09-14',
                'primary_release_date.lte': '2026-10-14',
            });
        });
    });

    describe('сериалы', () => {
        it('popular сортирует по популярности', () => {
            expect(getTvCategoryPreset('popular')).toEqual({
                sortBy: 'popularity.desc',
            });
        });

        it('top_rated отсекает сериалы с малым числом оценок', () => {
            expect(getTvCategoryPreset('top_rated')).toEqual({
                sortBy: 'vote_average.desc',
                'vote_count.gte': 200,
            });
        });

        it('upcoming берёт сериалы с первой серией от сегодняшнего дня', () => {
            expect(getTvCategoryPreset('upcoming')).toEqual({
                sortBy: 'first_air_date.asc',
                'first_air_date.gte': '2026-10-14',
            });
        });

        it('now_playing берёт сериалы, которые выходят сегодня', () => {
            expect(getTvCategoryPreset('now_playing')).toEqual({
                sortBy: 'popularity.desc',
                'air_date.gte': '2026-10-14',
                'air_date.lte': '2026-10-14',
            });
        });
    });
});
