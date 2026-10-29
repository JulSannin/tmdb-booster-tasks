import { DataWrapper } from '@/shared/ui/DataWrapper';
import { MediaCard, type MediaCardProps } from './MediaCard';
import { MediaCardSkeleton } from './MediaCardSkeleton';
import s from './MediaGrid.module.css';

type Props = {
    cards: MediaCardProps[];
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
};

export function MediaGrid({ cards, isLoading, isFetching, isError }: Props) {
    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            skeleton={
                <div className={s.grid}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <MediaCardSkeleton key={i} />
                    ))}
                </div>
            }
        >
            <div className={s.grid}>
                {cards.map((card) => (
                    <MediaCard key={card.id} {...card} />
                ))}
            </div>
        </DataWrapper>
    );
}
