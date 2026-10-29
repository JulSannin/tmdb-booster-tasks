import { Skeleton } from '@mui/material';
import s from './SearchMedia.module.css';

// Скелетон формы поиска с теми же размерами, что у SearchMedia (поле size="small"
// и кнопка по 40px в высоту), чтобы при загрузке страница не "прыгала"
export function SearchMediaSkeleton() {
    return (
        <div className={s.form}>
            <Skeleton variant="rounded" height={40} sx={{ flex: 1 }} />
            <Skeleton variant="rounded" width={94} height={40} />
        </div>
    );
}
