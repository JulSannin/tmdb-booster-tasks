import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/shared/test';
import { BackButton } from './BackButton';

const backButton = () => screen.getByRole('button', { name: 'Назад' });

describe('BackButton', () => {
    it('на странице, открытой по прямой ссылке, ведёт на главную', async () => {
        const user = userEvent.setup();
        const { router } = renderWithProviders(<BackButton />, {
            route: '/movie/603',
        });

        await user.click(backButton());

        await waitFor(() => expect(router.state.location.pathname).toBe('/'));
    });

    it('после перехода по сайту возвращает на предыдущую страницу', async () => {
        const user = userEvent.setup();
        const { router } = renderWithProviders(<BackButton />, {
            route: '/movie/603',
        });

        await act(async () => {
            await router.navigate('/movie/604');
        });
        await user.click(backButton());

        await waitFor(() =>
            expect(router.state.location.pathname).toBe('/movie/603')
        );
    });
});
