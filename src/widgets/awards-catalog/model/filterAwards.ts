import type { SortOption } from '@/features/sort-movies';
import type { Award } from './awards';

export type AwardsCategory = 'popular' | 'upcoming';

export type AwardsQuery = {
    sort: string;
    // границы даты последней церемонии (YYYY-MM-DD), пустая строка — не задана
    from: string;
    to: string;
};

// Значения такие же, как у параметра sort_by на самом TMDB. Сортировки по
// названию там нет, поэтому её нет и здесь
export const SORT_OPTIONS: SortOption[] = [
    { value: 'popularity.desc', label: 'По популярности (убывание)' },
    { value: 'popularity.asc', label: 'По популярности (возрастание)' },
    { value: 'latest_ceremony.desc', label: 'По дате церемонии (убывание)' },
    { value: 'latest_ceremony.asc', label: 'По дате церемонии (возрастание)' },
];

const UPCOMING_MONTHS = 2;

// Локальная дата в виде "2026-10-13". toISOString() отдал бы UTC и в части
// часовых поясов сдвинул бы день
function toIsoDate(date: Date) {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// Прибавляет месяцы, не вылезая за конец месяца: 31 декабря + 2 месяца это
// 28 февраля, а не 3 марта
function addMonths(date: Date, months: number) {
    const result = new Date(date.getFullYear(), date.getMonth() + months, 1);
    const lastDay = new Date(
        result.getFullYear(),
        result.getMonth() + 1,
        0
    ).getDate();
    result.setDate(Math.min(date.getDate(), lastDay));
    return result;
}

// «Ожидаемые» на TMDB отличаются от «Популярных» только значениями по
// умолчанию: ближайшие церемонии, от вчерашнего дня на два месяца вперёд, по
// возрастанию даты. «Популярные» не ограничены по датам и идут по популярности.
// Функция читает текущую дату, так что вызывать её надо один раз, а не на
// каждой отрисовке
export function getDefaultQuery(category: AwardsCategory): AwardsQuery {
    if (category === 'popular') {
        return { sort: 'popularity.desc', from: '', to: '' };
    }
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return {
        sort: 'latest_ceremony.asc',
        from: toIsoDate(yesterday),
        to: toIsoDate(addMonths(yesterday, UPCOMING_MONTHS)),
    };
}

export function isSameQuery(a: AwardsQuery, b: AwardsQuery) {
    return a.sort === b.sort && a.from === b.from && a.to === b.to;
}

// Фильтрует по дате последней церемонии и сортирует. Список в model/awards.ts
// уже идёт по убыванию популярности, а sort() стабилен, поэтому при равных
// датах этот порядок сохраняется. Даты — строки YYYY-MM-DD, их можно сравнивать
// как строки. filter() возвращает новый массив, так что reverse() и sort()
// исходный список не меняют
export function filterAwards(awards: Award[], { sort, from, to }: AwardsQuery) {
    const filtered = awards.filter(
        ({ latestCeremony }) =>
            (!from || latestCeremony >= from) && (!to || latestCeremony <= to)
    );

    switch (sort) {
        case 'popularity.asc':
            return filtered.reverse();
        case 'latest_ceremony.desc':
            return filtered.sort((a, b) =>
                b.latestCeremony.localeCompare(a.latestCeremony)
            );
        case 'latest_ceremony.asc':
            return filtered.sort((a, b) =>
                a.latestCeremony.localeCompare(b.latestCeremony)
            );
        default:
            return filtered;
    }
}
