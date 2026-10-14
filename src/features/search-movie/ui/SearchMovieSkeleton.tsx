import { Skeleton } from '@mui/material';
import s from './SearchMovie.module.css';

// Скелетон формы поиска с теми же размерами, что у SearchMovie (поле size="small"
// и кнопка по 40px в высоту), чтобы при загрузке страница не "прыгала"
export function SearchMovieSkeleton() {
    return (
        <div className={s.form}>
            <Skeleton variant="rounded" height={40} sx={{ flex: 1 }} />
            <Skeleton variant="rounded" width={94} height={40} />
        </div>
    );
}
