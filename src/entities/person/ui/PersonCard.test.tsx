import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/shared/test';
import { PersonCard } from './PersonCard';

const card = {
    id: 6384,
    name: 'Киану Ривз',
    photoUrl: '/keanu.jpg',
    info: 'Матрица, Джон Уик',
};

describe('PersonCard', () => {
    it('показывает фото, имя и подпись', () => {
        renderWithProviders(<PersonCard {...card} />);

        expect(screen.getByRole('img', { name: 'Киану Ривз' })).toHaveAttribute(
            'src',
            '/keanu.jpg'
        );
        expect(screen.getByText('Киану Ривз')).toBeVisible();
        expect(screen.getByText('Матрица, Джон Уик')).toBeVisible();
    });

    it('фото ведёт на страницу этого человека', () => {
        renderWithProviders(<PersonCard {...card} />);

        expect(
            screen.getByRole('link', { name: 'Киану Ривз' })
        ).toHaveAttribute('href', '/person/6384');
    });
});
