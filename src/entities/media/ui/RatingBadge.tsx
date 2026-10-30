import s from './RatingBadge.module.css';

type Props = {
    value: number;
    // Положение бейджа задаёт вызывающий (на постере карточки он прижат к
    // углу, на странице деталей стоит в потоке)
    className?: string;
};

// Цвет рейтинга по диапазону — тот же принцип, что у TMDB на сайте
function ratingClass(vote: number) {
    if (vote >= 7) return s.good;
    if (vote >= 5) return s.ok;
    return s.low;
}

export function RatingBadge({ value, className }: Props) {
    return (
        <span
            className={[s.badge, ratingClass(value), className]
                .filter(Boolean)
                .join(' ')}
        >
            {value.toFixed(1)}
        </span>
    );
}
