import { Skeleton } from '@mui/material';
import s from './MovieCard.module.css';

// Скелетон должен занимать ровно столько же места, сколько MovieCard, иначе
// при подгрузке данных страница "прыгает". Поэтому:
// - у MUI Skeleton по умолчанию height: 1.2em, а при заданной высоте
//   aspect-ratio не работает — height: 'auto' возвращает постеру пропорцию 2:3,
//   как у MovieCard;
// - подвал резервирует те же 2 строки заголовка, что и MovieCard
//   (--title-line-height задан в MovieCard.module.css)
const titleLineSx = { height: 'var(--title-line-height)' };

export function MovieCardSkeleton() {
    return (
        <div className={s.card}>
            <Skeleton
                variant="rectangular"
                sx={{ width: '100%', height: 'auto', aspectRatio: '2 / 3' }}
            />
            <div className={s.footer}>
                <Skeleton variant="text" sx={titleLineSx} />
                <Skeleton variant="text" width="60%" sx={titleLineSx} />
            </div>
        </div>
    );
}
