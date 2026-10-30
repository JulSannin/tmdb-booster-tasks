import { NavLink } from 'react-router';
import { RatingBadge } from './RatingBadge';
import s from './MediaCard.module.css';

export type MediaCardProps = {
    id: number;
    title?: string;
    // Готовый URL картинки (или заглушка) — собирает вызывающая секция,
    // MediaCard сам с TMDB_IMAGE_URL и заглушкой не работает
    posterUrl: string;
    voteAverage?: number;
    // Куда ведёт карточка. По умолчанию — страница фильма; для сериалов
    // адрес задаёт mapTvShows
    to?: string;
};

export function MediaCard({
    id,
    title,
    posterUrl,
    voteAverage,
    to,
}: MediaCardProps) {
    return (
        <div className={s.card}>
            <NavLink to={to ?? `/movie/${id}`} className={s.poster}>
                <img src={posterUrl} alt={title} />
                {voteAverage !== undefined && (
                    <RatingBadge value={voteAverage} className={s.rating} />
                )}
            </NavLink>
            <div className={s.footer}>
                <p className={s.title}>{title}</p>
            </div>
        </div>
    );
}
