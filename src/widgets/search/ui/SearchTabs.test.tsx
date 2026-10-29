import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SearchTabs } from './SearchTabs';

const noCounts = { movie: undefined, tv: undefined, person: undefined };

describe('SearchTabs', () => {
    it('показывает вкладки в порядке: фильмы, ТВ-шоу, люди', () => {
        render(
            <SearchTabs value="movie" counts={noCounts} onChange={vi.fn()} />
        );

        const labels = screen
            .getAllByRole('button')
            .map((button) => button.textContent?.trim());

        expect(labels).toEqual(['Фильмы', 'ТВ-шоу', 'Люди']);
    });

    it('пока ответа нет, не показывает числа', () => {
        render(
            <SearchTabs value="movie" counts={noCounts} onChange={vi.fn()} />
        );

        expect(screen.getByRole('button', { name: 'Фильмы' })).toBeVisible();
        expect(screen.getByRole('button', { name: 'ТВ-шоу' })).toBeVisible();
        expect(screen.getByRole('button', { name: 'Люди' })).toBeVisible();
    });

    it('выводит счётчики с разделителем тысяч', () => {
        render(
            <SearchTabs
                value="movie"
                counts={{ movie: 1234, tv: 7, person: 0 }}
                onChange={vi.fn()}
            />
        );

        // \s ловит и обычный, и неразрывный пробел, которым ru-RU делит тысячи
        expect(
            screen.getByRole('button', { name: /^Фильмы\s*1\s234$/ })
        ).toBeVisible();
        expect(
            screen.getByRole('button', { name: /^ТВ-шоу\s*7$/ })
        ).toBeVisible();
        // Ноль — это тоже счётчик, а не «ответа ещё нет»
        expect(
            screen.getByRole('button', { name: /^Люди\s*0$/ })
        ).toBeVisible();
    });

    it('отмечает активную вкладку через aria-pressed', () => {
        render(<SearchTabs value="tv" counts={noCounts} onChange={vi.fn()} />);

        expect(screen.getByRole('button', { name: 'ТВ-шоу' })).toHaveAttribute(
            'aria-pressed',
            'true'
        );
        expect(screen.getByRole('button', { name: 'Фильмы' })).toHaveAttribute(
            'aria-pressed',
            'false'
        );
        expect(screen.getByRole('button', { name: 'Люди' })).toHaveAttribute(
            'aria-pressed',
            'false'
        );
    });

    it('сообщает о клике типом вкладки', async () => {
        const onChange = vi.fn();
        const user = userEvent.setup();
        render(
            <SearchTabs value="movie" counts={noCounts} onChange={onChange} />
        );

        await user.click(screen.getByRole('button', { name: 'Люди' }));

        expect(onChange).toHaveBeenCalledExactlyOnceWith('person');
    });
});
