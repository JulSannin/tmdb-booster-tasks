import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    TextField,
} from '@mui/material';
import { SortSelect } from '@/features/sort-movies';
import {
    SORT_OPTIONS,
    isSameQuery,
    type AwardsQuery,
} from '../model/filterAwards';
import s from './AwardsFilters.module.css';

type Props = {
    value: AwardsQuery;
    onSearch: (value: AwardsQuery) => void;
};

// Панель слева, как на TMDB: сортировка и фильтр по дате последней церемонии.
// Внешне она похожа на панель страниц категорий (widgets/media-category), но
// работает иначе: изменения копятся в черновике и применяются кнопкой «Поиск»,
// пока черновик совпадает с применённым запросом, кнопка неактивна
export function AwardsFilters({ value, onSearch }: Props) {
    const [draft, setDraft] = useState(value);
    const [applied, setApplied] = useState(value);
    const [sortOpen, setSortOpen] = useState(false);
    // На широких экранах фильтры раскрыты, как на TMDB. На узких панель стоит
    // над сеткой, и раскрытые фильтры оттеснили бы карточки вниз — там свёрнуты
    // (страница рисуется только на клиенте, поэтому window здесь доступен)
    const [filtersOpen, setFiltersOpen] = useState(
        () => window.matchMedia('(min-width: 1024px)').matches
    );

    // Запрос в URL может поменяться не из этой панели (кнопка «назад» в
    // браузере), тогда черновик подстраивается под него
    if (!isSameQuery(applied, value)) {
        setApplied(value);
        setDraft(value);
    }

    return (
        <div className={s.panel}>
            <Accordion
                className={s.row}
                elevation={0}
                disableGutters
                expanded={sortOpen}
                onChange={() => setSortOpen((open) => !open)}
            >
                <AccordionSummary
                    expandIcon={<span className={s.chevron}>›</span>}
                >
                    Сортировать
                </AccordionSummary>
                <AccordionDetails className={s.details}>
                    <p className={s.groupTitle}>Сортировать результаты по</p>
                    <SortSelect
                        options={SORT_OPTIONS}
                        value={draft.sort}
                        onChange={(sort) => setDraft({ ...draft, sort })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion
                className={s.row}
                elevation={0}
                disableGutters
                expanded={filtersOpen}
                onChange={() => setFiltersOpen((open) => !open)}
            >
                <AccordionSummary
                    expandIcon={<span className={s.chevron}>›</span>}
                >
                    Фильтры
                </AccordionSummary>
                <AccordionDetails className={s.details}>
                    <p className={s.groupTitle}>Последняя церемония</p>
                    <label className={s.dateRow}>
                        <span className={s.dateLabel}>от</span>
                        <TextField
                            className={s.date}
                            type="date"
                            size="small"
                            value={draft.from}
                            onChange={(e) =>
                                setDraft({ ...draft, from: e.target.value })
                            }
                        />
                    </label>
                    <label className={s.dateRow}>
                        <span className={s.dateLabel}>до</span>
                        <TextField
                            className={s.date}
                            type="date"
                            size="small"
                            value={draft.to}
                            onChange={(e) =>
                                setDraft({ ...draft, to: e.target.value })
                            }
                        />
                    </label>
                </AccordionDetails>
            </Accordion>

            <Button
                className={s.search}
                variant="contained"
                disabled={isSameQuery(draft, value)}
                onClick={() => onSearch(draft)}
            >
                Поиск
            </Button>
        </div>
    );
}
