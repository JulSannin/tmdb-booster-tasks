import { useParams } from 'react-router';
import { parseId } from '@/shared/lib';
import { BackButton } from '@/shared/ui/BackButton';
import { NotFound } from '@/shared/ui/NotFound';
import type { MediaType } from '../model/mediaType';
import { MediaCast } from './MediaCast';
import { MediaInfo } from './MediaInfo';
import { MediaSimilar } from './MediaSimilar';
import s from './MediaDetailsWidget.module.css';

// Страница деталей фильма или сериала: кнопка «Назад» и три блока. Каждый
// блок сам запрашивает свои данные, поэтому появляется, как только они
// пришли, и ошибка одного блока не прячет остальные. id берётся из адреса
// (/movie/:id, /tv/:id)
export function MediaDetailsWidget({ mediaType }: { mediaType: MediaType }) {
    const id = parseId(useParams().id);

    // /movie/abc: такой страницы нет, как и у любого другого неизвестного
    // адреса. Показываем тот же экран 404 и в сеть не ходим
    if (id === null) return <NotFound />;

    return (
        <div className={s.page}>
            <BackButton />
            {/* key: клик по похожему фильму меняет только id в адресе, а
                компонент остаётся тем же. Без нового key блоки до ответа
                показывали бы данные прошлого фильма (RTK Query держит в
                data результат предыдущего аргумента) */}
            <div key={`${mediaType}-${id}`} className={s.content}>
                <MediaInfo mediaType={mediaType} id={id} />
                <MediaCast mediaType={mediaType} id={id} />
                <MediaSimilar mediaType={mediaType} id={id} />
            </div>
        </div>
    );
}
