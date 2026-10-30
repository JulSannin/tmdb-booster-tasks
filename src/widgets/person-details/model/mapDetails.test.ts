import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { mapPersonDetails } from './mapDetails';

// Возраст зависит от сегодняшней даты, поэтому «сегодня» фиксируем. Время
// местное (полдень), как у getFullYear/getMonth/getDate в коде: тесты не
// зависят от часового пояса машины
beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 30, 12));
});

afterEach(() => {
    vi.useRealTimers();
});

describe('mapPersonDetails', () => {
    it('собирает имя, фото, направление, место рождения и биографию', () => {
        expect(
            mapPersonDetails({
                name: 'Киану Ривз',
                profile_path: '/keanu.jpg',
                known_for_department: 'Acting',
                place_of_birth: 'Бейрут, Ливан',
                biography: '\n  Канадский актёр.\n\nРодился в Бейруте.  ',
            })
        ).toEqual({
            name: 'Киану Ривз',
            photoUrl: `${TMDB_IMAGE_URL}/h632/keanu.jpg`,
            department: 'Acting',
            birth: '',
            death: '',
            place: 'Бейрут, Ливан',
            biography: 'Канадский актёр.\n\nРодился в Бейруте.',
        });
    });

    it('если TMDB ничего не знает, поля пустые, а вместо фото заглушка', () => {
        expect(mapPersonDetails({ profile_path: null })).toEqual({
            name: '',
            photoUrl: '/no-photo.svg',
            department: '',
            birth: '',
            death: '',
            place: '',
            biography: '',
        });
    });

    describe('дата рождения живого человека', () => {
        it.each([
            // День рождения в этом году уже был
            ['1990-03-15', '15 марта 1990 (36 лет)'],
            ['1995-05-05', '5 мая 1995 (31 год)'],
            ['2004-01-01', '1 января 2004 (22 года)'],
            // Сегодня 30 октября: в самый день рождения уже полный год...
            ['1990-10-30', '30 октября 1990 (36 лет)'],
            // ...а накануне ещё нет
            ['1990-10-31', '31 октября 1990 (35 лет)'],
            ['1990-12-25', '25 декабря 1990 (35 лет)'],
            // Младенец
            ['2026-01-02', '2 января 2026 (0 лет)'],
        ])('%s -> «%s»', (birthday, expected) => {
            expect(mapPersonDetails({ birthday }).birth).toBe(expected);
        });
    });

    describe('умерший человек', () => {
        it('возраст стоит у даты смерти, у даты рождения его нет', () => {
            const info = mapPersonDetails({
                birthday: '1920-09-02',
                deathday: '2000-06-15',
            });

            expect(info.birth).toBe('2 сентября 1920');
            // На 15 июня 2000 года день рождения 2 сентября ещё не наступил
            expect(info.death).toBe('15 июня 2000 (79 лет)');
        });

        it('без даты рождения возраст не считается', () => {
            const info = mapPersonDetails({ deathday: '2000-06-15' });

            expect(info.birth).toBe('');
            expect(info.death).toBe('15 июня 2000');
        });

        it('если смерть раньше рождения (ошибка в данных), возраста нет', () => {
            const info = mapPersonDetails({
                birthday: '2000-01-01',
                deathday: '1990-01-01',
            });

            expect(info.death).toBe('1 января 1990');
        });
    });

    it.each([
        ['null', null],
        ['пустая строка', ''],
        ['только год', '1964'],
        ['год и месяц', '1964-09'],
        ['нулевой месяц', '1964-00-10'],
        ['тринадцатый месяц', '1964-13-10'],
        ['нулевой день', '1964-09-00'],
        ['с временем', '1964-09-02T00:00:00'],
        ['не дата', 'неизвестно'],
    ])('дата «%s» отбрасывается, а не ломает блок', (_name, birthday) => {
        expect(
            mapPersonDetails({ birthday, deathday: birthday })
        ).toMatchObject({ birth: '', death: '' });
    });
});
