import type { ReactNode } from 'react';
import s from './DataWrapper.module.css';

interface Props {
    isLoading: boolean;
    isError: boolean;
    isFetching?: boolean;
    children: ReactNode;
}

// Общая обёртка для результата запроса: показывает загрузку/ошибку
// вместо children, а если идёт фоновое обновление (isFetching) — бейдж поверх
export function DataWrapper({
    isLoading,
    isError,
    isFetching,
    children,
}: Props) {
    if (isLoading) return <p className={s.message}>Загрузка...</p>;
    if (isError) return <p className={s.message}>Ошибка загрузки</p>;

    return (
        <div className={s.wrapper}>
            {isFetching && <p className={s.updatingBadge}>Обновление...</p>}
            {children}
        </div>
    );
}
