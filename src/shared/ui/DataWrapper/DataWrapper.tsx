import type { ReactNode } from 'react';
import { LinearProgress } from '@mui/material';
import s from './DataWrapper.module.css';

interface Props {
    isLoading: boolean;
    isError: boolean;
    isFetching?: boolean;
    skeleton?: ReactNode;
    children: ReactNode;
}

// Общая обёртка для результата запроса: при первой загрузке показывает
// skeleton (если передан) или просто прогресс-бар, при ошибке — сообщение,
// а если идёт фоновое обновление (isFetching) — тонкий LinearProgress поверх
export function DataWrapper({
    isLoading,
    isError,
    isFetching,
    skeleton,
    children,
}: Props) {
    if (isLoading) return <>{skeleton ?? <LinearProgress />}</>;
    if (isError) return <p className={s.message}>Ошибка загрузки</p>;

    return (
        <div className={s.wrapper}>
            {isFetching && <LinearProgress className={s.progress} />}
            {children}
        </div>
    );
}
