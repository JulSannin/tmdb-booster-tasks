import { useRef } from 'react';
import { NavLink } from 'react-router';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import { MovieCard, MovieCardSkeleton } from '@/entities/movie';
import s from './MovieCarouselSection.module.css';

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

    function scroll(direction: -1 | 1) {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({
            left: direction * el.clientWidth * 0.9,
            behavior: 'smooth',
        });
    }

    return (
        <section className={s.section}>
            <h2>{title}</h2>
            <DataWrapper
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
                skeleton={
                    <div className={s.scroller}>
                        {Array.from({ length: 6 }, (_, i) => (
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
