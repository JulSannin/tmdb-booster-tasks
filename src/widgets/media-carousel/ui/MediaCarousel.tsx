import { useRef, type CSSProperties } from 'react';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import {
    MediaCard,
    MediaCardSkeleton,
    type MediaCardProps,
} from '@/entities/media';
import { MediaTypeToggle, type MediaType } from './MediaTypeToggle';
import s from './MediaCarousel.module.css';

// Сколько карточек помещается на "странице" карусели при полной ширине. От
// этого числа CSS считает максимальную ширину секции (--cards-per-page), и по
// нему же рисуется скелетон — так число задано в одном месте
const CARDS_PER_PAGE = 7;

type Props = {
    title: string;
    // Что сейчас показывает карусель: фильмы или ТВ-шоу. Состояние хранит
    // родитель — по нему же он выбирает, какие данные загружать
    mediaType: MediaType;
    onMediaTypeChange: (value: MediaType) => void;
    cards: MediaCardProps[];
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
};

// Карусель карточек с заголовком и переключателем фильмы/ТВ-шоу. Данные она
// не грузит: их запрашивают блоки PopularCarousel, TopRatedCarousel,
// UpcomingCarousel и NowPlayingCarousel и передают сюда пропсами
export function MediaCarousel({
    title,
    mediaType,
    onMediaTypeChange,
    cards,
    isLoading,
    isFetching,
    isError,
}: Props) {
    const scrollerRef = useRef<HTMLDivElement>(null);

    // Один клик листает на "страницу": на столько целых карточек, сколько их
    // сейчас помещается в контейнер (при полной ширине — CARDS_PER_PAGE, лимит
    // задаёт max-width у .section). Расстояние берём кратным шагу карточки
    // (ширина + gap): иначе scroll-snap округлит, например, 6.2 карточки до 6
    function scroll(direction: -1 | 1) {
        const el = scrollerRef.current;
        if (!el) return;
        const card = el.firstElementChild as HTMLElement | null;
        if (!card) return;

        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        const step = card.offsetWidth + gap;
        const visibleCards = Math.max(
            1,
            Math.floor((el.clientWidth + gap) / step)
        );

        el.scrollBy({
            left: direction * visibleCards * step,
            behavior: 'smooth',
        });
    }

    return (
        <section
            className={s.section}
            style={{ '--cards-per-page': CARDS_PER_PAGE } as CSSProperties}
        >
            <div className={s.header}>
                <h2>{title}</h2>
                <MediaTypeToggle
                    value={mediaType}
                    onChange={onMediaTypeChange}
                />
            </div>
            {/* key: при смене типа лента пересоздаётся и начинается с первой
                карточки, а не остаётся прокрученной. Переключатель стоит вне
                DataWrapper, поэтому не пересоздаётся и не теряет фокус */}
            <DataWrapper
                key={mediaType}
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
                skeleton={
                    <div className={s.scroller}>
                        {Array.from({ length: CARDS_PER_PAGE }, (_, i) => (
                            <MediaCardSkeleton key={i} />
                        ))}
                    </div>
                }
            >
                <div className={s.scrollerWrap}>
                    <button
                        type="button"
                        className={`${s.arrow} ${s.arrowLeft}`}
                        onClick={() => scroll(-1)}
                        aria-label="Прокрутить назад"
                    >
                        ‹
                    </button>
                    <div className={s.scroller} ref={scrollerRef}>
                        {cards.map((card) => (
                            <MediaCard key={card.id} {...card} />
                        ))}
                    </div>
                    <button
                        type="button"
                        className={`${s.arrow} ${s.arrowRight}`}
                        onClick={() => scroll(1)}
                        aria-label="Прокрутить вперёд"
                    >
                        ›
                    </button>
                </div>
            </DataWrapper>
        </section>
    );
}
