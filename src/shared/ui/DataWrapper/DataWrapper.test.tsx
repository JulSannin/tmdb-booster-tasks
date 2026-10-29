import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DataWrapper } from './DataWrapper';

describe('DataWrapper', () => {
    it('при первой загрузке без skeleton показывает прогресс-бар', () => {
        render(
            <DataWrapper isLoading isError={false}>
                Содержимое
            </DataWrapper>
        );

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
        expect(screen.queryByText('Содержимое')).not.toBeInTheDocument();
    });

    it('при первой загрузке показывает skeleton вместо прогресс-бара', () => {
        render(
            <DataWrapper
                isLoading
                isError={false}
                skeleton={<div>Скелетон</div>}
            >
                Содержимое
            </DataWrapper>
        );

        expect(screen.getByText('Скелетон')).toBeInTheDocument();
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
        expect(screen.queryByText('Содержимое')).not.toBeInTheDocument();
    });

    it('при ошибке показывает сообщение вместо содержимого', () => {
        render(
            <DataWrapper isLoading={false} isError>
                Содержимое
            </DataWrapper>
        );

        expect(screen.getByText('Ошибка загрузки')).toBeInTheDocument();
        expect(screen.queryByText('Содержимое')).not.toBeInTheDocument();
    });

    it('после загрузки показывает только содержимое', () => {
        render(
            <DataWrapper isLoading={false} isError={false}>
                Содержимое
            </DataWrapper>
        );

        expect(screen.getByText('Содержимое')).toBeInTheDocument();
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
        expect(screen.queryByText('Ошибка загрузки')).not.toBeInTheDocument();
    });

    it('при фоновом обновлении держит содержимое и добавляет прогресс-бар', () => {
        render(
            <DataWrapper isLoading={false} isError={false} isFetching>
                Содержимое
            </DataWrapper>
        );

        expect(screen.getByText('Содержимое')).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
});
