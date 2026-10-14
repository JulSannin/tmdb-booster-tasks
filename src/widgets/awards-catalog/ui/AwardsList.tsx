import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import type { Award } from '../model/awards';
import { AwardCard } from './AwardCard';
import s from './AwardsList.module.css';

const PAGE_SIZE = 20;

type Props = {
    awards: Award[];
};

// Список порциями по 20, как на TMDB: вторую порцию пользователь подгружает
// кнопкой «Загрузить ещё», а после этого остальные подгружаются сами, когда
// кнопка подходит к краю экрана. Сколько карточек показано, помнит сам список,
// поэтому страница пересоздаёт его (key) при каждом новом поиске, и он снова
// начинается с первой порции
export function AwardsList({ awards }: Props) {
    const [count, setCount] = useState(PAGE_SIZE);
    const [autoLoad, setAutoLoad] = useState(false);
    const moreRef = useRef<HTMLButtonElement>(null);

    // Наблюдатель создаётся заново после каждой порции: только так он сразу
    // сообщает, видна ли кнопка, и подгрузка продолжается, пока новые карточки
    // не уведут её за пределы запаса в 800px
    useEffect(() => {
        const button = moreRef.current;
        if (!autoLoad || !button) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCount((n) => n + PAGE_SIZE);
            },
            { rootMargin: '0px 0px 800px 0px' }
        );
        observer.observe(button);
        return () => observer.disconnect();
    }, [autoLoad, count]);

    if (!awards.length) {
        return <p className={s.empty}>Ничего не найдено</p>;
    }

    return (
        <>
            <ul className={s.grid}>
                {awards.slice(0, count).map((award) => (
                    <li key={award.id} className={s.item}>
                        <AwardCard
                            id={award.id}
                            name={award.name}
                            latestCeremony={award.latestCeremony}
                            logo={award.logo}
                        />
                    </li>
                ))}
            </ul>
            {count < awards.length && (
                <Button
                    ref={moreRef}
                    className={s.more}
                    variant="contained"
                    onClick={() => {
                        setCount((n) => n + PAGE_SIZE);
                        setAutoLoad(true);
                    }}
                >
                    Загрузить ещё
                </Button>
            )}
        </>
    );
}
