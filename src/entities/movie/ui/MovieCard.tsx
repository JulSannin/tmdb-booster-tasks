import { NavLink } from 'react-router';
import s from './MovieCard.module.css';

type Props = {
    id: number;
    title?: string;
    // Готовый URL картинки (или заглушка) — собирает вызывающая секция,
    // MovieCard сам с TMDB_IMAGE_URL и placehold.co не работает
    posterUrl: string;
    voteAverage?: number;
};

// Цвет рейтинга по диапазону — тот же принцип, что у TMDB на сайте
function ratingClass(vote: number) {
    if (vote >= 7) return s.ratingGood;
    if (vote >= 5) return s.ratingOk;
    return s.ratingLow;
}

export function MovieCard({ id, title, posterUrl, voteAverage }: Props) {
    return (
        <div className={s.card}>
            <NavLink to={`/movie/${id}`} className={s.poster}>
                <img src={posterUrl} alt={title} />
                {voteAverage !== undefined && (
                    <span className={`${s.rating} ${ratingClass(voteAverage)}`}>
                        {voteAverage.toFixed(1)}
                    </span>
                )}
            </NavLink>
            <div className={s.footer}>
                <p className={s.title}>{title}</p>
            </div>
        </div>
    );
}
