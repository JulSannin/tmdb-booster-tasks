import type { ReactNode } from 'react';
import s from './DetailsBlock.module.css';

// Блок страницы с заголовком. Заголовок стоит вне DataWrapper детей, поэтому
// виден и пока данные грузятся: страница не меняет раскладку после ответа
export function DetailsBlock({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <section>
            <h2 className={s.title}>{title}</h2>
            {children}
        </section>
    );
}

// Текст на месте блока, у которого нет данных (у фильма может не быть ни
// актёров, ни похожих)
export function DetailsMessage({ children }: { children: ReactNode }) {
    return <p className={s.message}>{children}</p>;
}
