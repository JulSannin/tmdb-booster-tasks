import { DataWrapper } from '@/shared/ui/DataWrapper';
import { PersonCard, type PersonCardProps } from './PersonCard';
import { PersonCardSkeleton } from './PersonCardSkeleton';
import s from './PersonGrid.module.css';

// Столько людей приходит на одной странице. Скелетонов рисуем столько же,
// чтобы высота страницы не менялась после загрузки
const PAGE_SIZE = 20;

type Props = {
    cards: PersonCardProps[];
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
};

export function PersonGrid({ cards, isLoading, isFetching, isError }: Props) {
    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            skeleton={
                <ul className={s.grid}>
                    {Array.from({ length: PAGE_SIZE }, (_, i) => (
                        <li key={i}>
                            <PersonCardSkeleton />
                        </li>
                    ))}
                </ul>
            }
        >
            <ul className={s.grid}>
                {cards.map((card) => (
                    <li key={card.id}>
                        <PersonCard {...card} />
                    </li>
                ))}
            </ul>
        </DataWrapper>
    );
}
