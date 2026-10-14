import { useRef, type CSSProperties } from 'react';
import { NavLink } from 'react-router';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import { MovieCard, MovieCardSkeleton } from '@/entities/movie';
import s from './MovieCarouselSection.module.css';

// Сколько карточек помещается на "странице" карусели при полной ширине. От
// этого числа CSS считает максимальную ширину секции (--cards-per-page), и по
// нему же рисуется скелетон — так число задано в одном месте
const CARDS_PER_PAGE = 7;

type Movie = {
    id: number;
    title?: string;
    posterUrl: string;
    voteAverage?: number;
};

type Props = {
    title: string;
    viewMoreHref: string;
    movies: Movie[];
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
};

export function MovieCarouselSection({
    title,
    viewMoreHref,
    movies,
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
            <h2>{title}</h2>
            <DataWrapper
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
                skeleton={
                    <div className={s.scroller}>
                        {Array.from({ length: CARDS_PER_PAGE }, (_, i) => (
                            <MovieCardSkeleton key={i} />
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
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} {...movie} />
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
            <NavLink to={viewMoreHref} className={s.viewMore}>
                View More
            </NavLink>
        </section>
    );
}
