import { Skeleton } from '@mui/material';
import s from './MovieCard.module.css';

export function MovieCardSkeleton() {
    return (
        <div className={s.card}>
            <Skeleton
                variant="rectangular"
                sx={{ width: '100%', aspectRatio: '2 / 3' }}
            />
            <div className={s.footer}>
                <Skeleton variant="text" width="80%" />
            </div>
        </div>
    );
}
