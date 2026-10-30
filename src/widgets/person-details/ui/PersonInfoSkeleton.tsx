import { Skeleton } from '@mui/material';
import s from './PersonInfo.module.css';

// Те же контейнеры и размеры, что у PersonInfo, чтобы страница не прыгала после
// загрузки. У MUI Skeleton по умолчанию height: 1.2em, а при заданной высоте
// aspect-ratio не работает — поэтому у фото height: 'auto'
export function PersonInfoSkeleton() {
    return (
        <div className={s.info}>
            <div className={s.photoBox}>
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
                <Skeleton variant="text" width="50%" sx={{ height: 38 }} />
                <div>
                    <Skeleton variant="text" width="25%" />
                    <Skeleton variant="text" width="45%" />
                    <Skeleton variant="text" width="35%" />
                </div>
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
