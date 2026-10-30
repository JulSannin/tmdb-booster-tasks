import { describe, expect, it } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import {
    formatRuntime,
    formatSeriesLength,
    getYear,
    mapMovieDetails,
    mapTvDetails,
} from './mapDetails';

describe('getYear', () => {
    it('берёт год из даты', () => {
        expect(getYear('1999-03-30')).toBe('1999');
    });

    it('возвращает пустую строку, если даты нет или она пустая', () => {
        // у ещё не анонсированных фильмов TMDB присылает ""
        expect(getYear()).toBe('');
        expect(getYear('')).toBe('');
    });

    it('не принимает мусор вместо даты', () => {
        expect(getYear('n/a')).toBe('');
        expect(getYear('99-01-01')).toBe('');
    });
});

describe('formatRuntime', () => {
    it.each([
        [136, '2 ч 16 мин'],
        [61, '1 ч 1 мин'],
        [120, '2 ч'],
        [60, '1 ч'],
        [45, '45 мин'],
        [1, '1 мин'],
    ])('%i мин -> «%s»', (minutes, expected) => {
        expect(formatRuntime(minutes)).toBe(expected);
    });

    it('возвращает пустую строку, если длительность неизвестна', () => {
        expect(formatRuntime()).toBe('');
        expect(formatRuntime(null)).toBe('');
        expect(formatRuntime(0)).toBe('');
        expect(formatRuntime(-10)).toBe('');
    });
});

describe('mapMovieDetails', () => {
    it('собирает данные для блока', () => {
        expect(
            mapMovieDetails({
                title: 'Матрица',
                overview: 'Хакер узнаёт правду',
                poster_path: '/matrix.jpg',
                release_date: '1999-03-30',
                runtime: 136,
                genres: [{ name: 'Боевик' }, { name: 'Фантастика' }],
                vote_average: 8.2,
            })
        ).toEqual({
            title: 'Матрица',
            posterUrl: `${TMDB_IMAGE_URL}/w780/matrix.jpg`,
            year: '1999',
            voteAverage: 8.2,
            genres: ['Боевик', 'Фантастика'],
            length: '2 ч 16 мин',
            overview: 'Хакер узнаёт правду',
        });
    });

    it('подставляет значения по умолчанию, если полей нет', () => {
        expect(mapMovieDetails({})).toEqual({
            title: '',
            posterUrl: '/no-poster.svg',
            year: '',
            voteAverage: undefined,
            genres: [],
            length: '',
            overview: '',
        });
    });

    it('пропускает жанры без названия', () => {
        const { genres } = mapMovieDetails({
            genres: [{ name: 'Драма' }, {}, { name: 'Комедия' }],
        });

        expect(genres).toEqual(['Драма', 'Комедия']);
    });
});

describe('formatSeriesLength', () => {
    it.each([
        [1, 1, '1 сезон · 1 серия'],
        [2, 3, '2 сезона · 3 серии'],
        [8, 73, '8 сезонов · 73 серии'],
        // 11-14 всегда «много», хотя кончаются на 1-4
        [11, 11, '11 сезонов · 11 серий'],
        [14, 12, '14 сезонов · 12 серий'],
        [21, 21, '21 сезон · 21 серия'],
        [22, 104, '22 сезона · 104 серии'],
        [10, 228, '10 сезонов · 228 серий'],
    ])('%i сез., %i сер. -> «%s»', (seasons, episodes, expected) => {
        expect(formatSeriesLength(seasons, episodes)).toBe(expected);
    });

    it('пропускает то, чего TMDB не знает', () => {
        expect(formatSeriesLength(3, undefined)).toBe('3 сезона');
        expect(formatSeriesLength(undefined, 5)).toBe('5 серий');
        // у анонсированных сериалов приходят нули
        expect(formatSeriesLength(0, 0)).toBe('');
        expect(formatSeriesLength()).toBe('');
    });
});

describe('mapTvDetails', () => {
    it('собирает данные для блока: вместо времени сезоны и серии', () => {
        const info = mapTvDetails({
            name: 'Шоу',
            poster_path: '/show.jpg',
            first_air_date: '2011-04-17',
            number_of_seasons: 8,
            number_of_episodes: 73,
            genres: [{ name: 'Драма' }],
            vote_average: 8.4,
        });

        expect(info).toMatchObject({
            title: 'Шоу',
            posterUrl: `${TMDB_IMAGE_URL}/w780/show.jpg`,
            year: '2011',
            voteAverage: 8.4,
            genres: ['Драма'],
            length: '8 сезонов · 73 серии',
        });
    });

    it('без данных оставляет значения по умолчанию', () => {
        expect(mapTvDetails({})).toEqual({
            title: '',
            posterUrl: '/no-poster.svg',
            year: '',
            voteAverage: undefined,
            genres: [],
            length: '',
            overview: '',
        });
    });
});
