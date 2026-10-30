import { Skeleton } from '@mui/material';
import s from './MediaInfo.module.css';

// Те же контейнеры и размеры, что у MediaInfo, чтобы страница не прыгала после
// загрузки. У MUI Skeleton по умолчанию height: 1.2em, а при заданной высоте
// aspect-ratio не работает — поэтому у постера height: 'auto'
export function MediaInfoSkeleton() {
    return (
        <div className={s.info}>
            <div className={s.posterBox}>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '2 / 3',
                        borderRadius: '8px',
                    }}
                />
            </div>
            <div className={s.text}>
                <Skeleton variant="text" width="60%" sx={{ height: 38 }} />
                <Skeleton variant="text" width="30%" sx={{ height: 24 }} />
                <Skeleton variant="text" width="45%" sx={{ height: 28 }} />
                <div>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="70%" />
                </div>
            </div>
        </div>
    );
}
