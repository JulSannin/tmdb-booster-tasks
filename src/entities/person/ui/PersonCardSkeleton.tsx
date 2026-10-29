import { Skeleton } from '@mui/material';
import s from './PersonCard.module.css';

// Размеры те же, что у PersonCard (см. комментарий там): постер 2:3 и подвал
// из одной строки имени и двух строк описания. height: 'auto' нужен, потому что
// у MUI Skeleton по умолчанию height: 1.2em и aspect-ratio иначе не работает
const nameLineSx = { height: 'var(--name-line-height)' };
const infoLineSx = { height: 'var(--info-line-height)' };

export function PersonCardSkeleton() {
    return (
        <div className={s.card}>
            <Skeleton
                variant="rectangular"
                sx={{ width: '100%', height: 'auto', aspectRatio: '2 / 3' }}
            />
            <div className={s.footer}>
                <Skeleton variant="text" width="70%" sx={nameLineSx} />
                <Skeleton variant="text" sx={infoLineSx} />
                <Skeleton variant="text" width="60%" sx={infoLineSx} />
            </div>
        </div>
    );
}
