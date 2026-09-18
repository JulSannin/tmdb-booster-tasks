import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
} from '@mui/material';
import { SortSelect, type SortOption } from '@/features/sort-movies';
import { RatingRangeFilter } from '@/features/filter-by-rating';
import { GenreFilter } from '@/features/filter-by-genre';
import s from './MovieFilters.module.css';

type Genre = { id: number; name: string };

export type MovieFiltersValue = {
    sortBy: string;
    ratingRange: [number, number];
    genres: number[];
};

type Props = {
    sortOptions: SortOption[];
    genreOptions: Genre[];
    value: MovieFiltersValue;
    onChange: (value: MovieFiltersValue) => void;
    onReset: () => void;
};

export function MovieFilters({
    sortOptions,
    genreOptions,
    value,
    onChange,
    onReset,
}: Props) {
    const [sortOpen, setSortOpen] = useState(false);
    const [filtersOpen, setFiltersOpen] = useState(false);

    const activeFiltersCount =
        value.genres.length +
        (value.ratingRange[0] > 0 || value.ratingRange[1] < 10 ? 1 : 0);

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
                    Sort
                </AccordionSummary>
                <AccordionDetails className={s.details}>
                    <SortSelect
                        options={sortOptions}
                        value={value.sortBy}
                        onChange={(sortBy) => onChange({ ...value, sortBy })}
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
                    <span className={s.rowLabel}>
                        Filters
                        {activeFiltersCount > 0 && (
                            <span className={s.badge}>
                                {activeFiltersCount}
                            </span>
                        )}
                    </span>
                </AccordionSummary>
                <AccordionDetails className={s.details}>
                    <RatingRangeFilter
                        value={value.ratingRange}
                        onChange={(ratingRange) =>
                            onChange({ ...value, ratingRange })
                        }
                    />
                    <GenreFilter
                        genres={genreOptions}
                        value={value.genres}
                        onChange={(genres) => onChange({ ...value, genres })}
                    />
                </AccordionDetails>
            </Accordion>

            <Button onClick={onReset}>Reset filters</Button>
        </div>
    );
}
