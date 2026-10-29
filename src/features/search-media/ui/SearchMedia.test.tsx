import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SearchMedia } from './SearchMedia';

const searchbox = () => screen.getByRole('searchbox');
const submitButton = () => screen.getByRole('button', { name: 'Search' });

describe('SearchMedia', () => {
    it('не даёт отправить пустой запрос и запрос из одних пробелов', async () => {
        const user = userEvent.setup();
        render(<SearchMedia onSubmit={vi.fn()} />);

        expect(submitButton()).toBeDisabled();

        await user.type(searchbox(), '   ');
        expect(submitButton()).toBeDisabled();

        await user.type(searchbox(), 'матрица');
        expect(submitButton()).toBeEnabled();
    });

    it('отправляет запрос без пробелов по краям', async () => {
        const onSubmit = vi.fn();
        const user = userEvent.setup();
        render(<SearchMedia onSubmit={onSubmit} />);

        await user.type(searchbox(), '  матрица  ');
        await user.click(submitButton());

        expect(onSubmit).toHaveBeenCalledExactlyOnceWith('матрица');
    });

    it('отправляет запрос по Enter', async () => {
        const onSubmit = vi.fn();
        const user = userEvent.setup();
        render(<SearchMedia onSubmit={onSubmit} />);

        await user.type(searchbox(), 'матрица{Enter}');

        expect(onSubmit).toHaveBeenCalledExactlyOnceWith('матрица');
    });

    it('начинает с initialQuery', () => {
        render(<SearchMedia onSubmit={vi.fn()} initialQuery="матрица" />);

        expect(searchbox()).toHaveValue('матрица');
    });

    it('подхватывает новый initialQuery, а при прежнем не трогает набранное', async () => {
        const user = userEvent.setup();
        const { rerender } = render(
            <SearchMedia onSubmit={vi.fn()} initialQuery="матрица" />
        );

        await user.type(searchbox(), ' 2');
        expect(searchbox()).toHaveValue('матрица 2');

        // Родитель перерисовался, но initialQuery тот же: набранное остаётся
        rerender(<SearchMedia onSubmit={vi.fn()} initialQuery="матрица" />);
        expect(searchbox()).toHaveValue('матрица 2');

        // Адрес поменялся снаружи (кнопка «назад»): поле берёт новое значение
        rerender(<SearchMedia onSubmit={vi.fn()} initialQuery="аватар" />);
        expect(searchbox()).toHaveValue('аватар');
    });

    it('событие search от крестика сообщает об очистке поля', async () => {
        const onSubmit = vi.fn();
        const user = userEvent.setup();
        render(<SearchMedia onSubmit={onSubmit} initialQuery="матрица" />);

        await user.clear(searchbox());
        // jsdom сам это событие не шлёт, его создаёт браузер
        fireEvent(searchbox(), new Event('search'));

        expect(onSubmit).toHaveBeenCalledExactlyOnceWith('');
    });

    it('событие search при непустом поле ничего не отправляет', () => {
        const onSubmit = vi.fn();
        render(<SearchMedia onSubmit={onSubmit} initialQuery="матрица" />);

        fireEvent(searchbox(), new Event('search'));

        expect(onSubmit).not.toHaveBeenCalled();
    });
});
