import { pluralize, profileUrl } from '@/shared/lib';

// Всё, что показывает блок с информацией о человеке. Строки пустые, если TMDB
// этого не знает: такие строки блок не рисует
export type PersonInfoData = {
    name: string;
    photoUrl: string;
    // Чем известен: Acting, Directing, ...
    department: string;
    // «2 сентября 1964 (61 год)». У умершего возраста здесь нет, он стоит у
    // даты смерти
    birth: string;
    // Только у умерших: «15 июня 2020 (55 лет)»
    death: string;
    place: string;
    biography: string;
};

// Календарная дата без часового пояса: день рождения у всех в один день
type CalendarDate = { year: number; month: number; day: number };

const MONTHS = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

// "1964-09-02" -> { year: 1964, month: 9, day: 2 }. Разбираем руками, а не
// через new Date: Date читает такую строку как полночь по UTC, и западнее
// Гринвича день сдвинулся бы на предыдущий. null для пустой или неполной даты
function parseDate(date?: string | null): CalendarDate | null {
    const match = date?.match(/^(\d{4})-(\d{2})-(\d{2})$/);

    if (!match) return null;

    const [year, month, day] = match.slice(1).map(Number);

    return month >= 1 && month <= 12 && day >= 1 && day <= 31
        ? { year, month, day }
        : null;
}

// Сколько полных лет прошло между датами: если день рождения в год `to` ещё не
// наступил, последний год не засчитывается
function yearsBetween(from: CalendarDate, to: CalendarDate) {
    const hadBirthday =
        to.month > from.month ||
        (to.month === from.month && to.day >= from.day);

    return to.year - from.year - (hadBirthday ? 0 : 1);
}

// {1964, 9, 2}, 61 -> "2 сентября 1964 (61 год)". Без возраста, а также с
// отрицательным (в данных TMDB бывают ошибки) — просто дата
function formatDate(date: CalendarDate, age?: number) {
    const text = `${date.day} ${MONTHS[date.month - 1]} ${date.year}`;

    return age === undefined || age < 0
        ? text
        : `${text} (${pluralize(age, ['год', 'года', 'лет'])})`;
}

export function mapPersonDetails(person: {
    name?: string;
    profile_path?: string | null;
    known_for_department?: string;
    birthday?: string | null;
    deathday?: string | null;
    place_of_birth?: string | null;
    biography?: string;
}): PersonInfoData {
    const birth = parseDate(person.birthday);
    const death = parseDate(person.deathday);
    const now = new Date();
    const today = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
    };

    return {
        name: person.name ?? '',
        photoUrl: profileUrl(person.profile_path),
        department: person.known_for_department ?? '',
        // Живому возраст считаем на сегодня, умершему — на день смерти
        birth: birth
            ? formatDate(birth, death ? undefined : yearsBetween(birth, today))
            : '',
        death: death
            ? formatDate(death, birth ? yearsBetween(birth, death) : undefined)
            : '',
        place: person.place_of_birth ?? '',
        // В биографии TMDB абзацы разделены переводами строк
        biography: person.biography?.trim() ?? '',
    };
}
