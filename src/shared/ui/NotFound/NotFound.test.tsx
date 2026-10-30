import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/shared/test';
import { NotFound } from './NotFound';

describe('NotFound', () => {
    it('сообщает, что страницы нет', () => {
        renderWithProviders(<NotFound />, { route: '/nope' });

        expect(
            screen.getByRole('heading', {
                level: 1,
                name: 'Страница не найдена',
            })
        ).toBeVisible();
        expect(screen.getByText('404')).toBeInTheDocument();
    });

    it('кнопка «На главную» ведёт на главную', async () => {
        const user = userEvent.setup();
        const { router } = renderWithProviders(<NotFound />, {
            route: '/nope?page=2',
        });
        const home = screen.getByRole('link', { name: 'На главную' });

        expect(home).toHaveAttribute('href', '/');

        await user.click(home);

        expect(router.state.location.pathname).toBe('/');
        expect(router.state.location.search).toBe('');
    });
});
