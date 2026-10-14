import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { AWARDS } from '../model/awards';
import {
    SORT_OPTIONS,
    filterAwards,
    getDefaultQuery,
    type AwardsCategory,
    type AwardsQuery,
} from '../model/filterAwards';
import { AwardsFilters } from './AwardsFilters';
import { AwardsList } from './AwardsList';
import s from './AwardsCatalogWidget.module.css';

const TITLES: Record<AwardsCategory, string> = {
    popular: 'Популярные премии',
    upcoming: 'Ожидаемые премии',
};

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// Параметры лежат в URL, и их могут испортить руками. Нет параметра или он
// испорчен — берём значение по умолчанию. Пустой параметр (?ceremony_gte=) —
// это поле, которое пользователь очистил: границы нет
function parseSort(value: string | null, fallback: string) {
    return (
        SORT_OPTIONS.find((option) => option.value === value)?.value ?? fallback
    );
}

function parseDate(value: string | null, fallback: string) {
    if (value === null) return fallback;
    if (value === '') return '';
    return DATE_PATTERN.test(value) ? value : fallback;
}

type Props = { category: AwardsCategory };

// Обе страницы премий (популярные и ожидаемые) — это один и тот же список с
// разными значениями по умолчанию, как на TMDB. Страница статичная: у TMDB нет
// API для премий, список лежит в model/awards.ts, а сортировка и фильтры
// работают прямо на нём. В URL лежит применённый запрос (после кнопки
// «Поиск»), так что им можно поделиться
export function AwardsCatalogWidget({ category }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();
    // Значения по умолчанию у «Ожидаемых» зависят от сегодняшней даты, поэтому
    // считаем их один раз при открытии страницы, а не на каждой отрисовке
    const [defaults] = useState(() => getDefaultQuery(category));

    const query: AwardsQuery = {
        sort: parseSort(searchParams.get('sort_by'), defaults.sort),
        from: parseDate(searchParams.get('ceremony_gte'), defaults.from),
        to: parseDate(searchParams.get('ceremony_lte'), defaults.to),
    };

    // В URL кладём только то, что отличается от значений по умолчанию. Очищенная
    // дата тоже кладётся (пустой параметр), иначе она вернулась бы к умолчанию
    function search(next: AwardsQuery) {
        const params: Record<string, string> = {};
        if (next.sort !== defaults.sort) params.sort_by = next.sort;
        if (next.from !== defaults.from) params.ceremony_gte = next.from;
        if (next.to !== defaults.to) params.ceremony_lte = next.to;
        setSearchParams(params);
    }

    return (
        <div className={s.page}>
            <h1 className={s.title}>{TITLES[category]}</h1>
            <div className={s.content}>
                <AwardsFilters value={query} onSearch={search} />
                <div className={s.results}>
                    <AwardsList
                        key={`${query.sort}|${query.from}|${query.to}`}
                        awards={filterAwards(AWARDS, query)}
                    />
                </div>
            </div>
        </div>
    );
}
