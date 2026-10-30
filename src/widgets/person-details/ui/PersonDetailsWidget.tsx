import { useParams } from 'react-router';
import { parseId } from '@/shared/lib';
import { BackButton } from '@/shared/ui/BackButton';
import { NotFound } from '@/shared/ui/NotFound';
import { PersonCredits } from './PersonCredits';
import { PersonInfo } from './PersonInfo';
import s from './PersonDetailsWidget.module.css';

// Страница человека (актёра, режиссёра): кнопка «Назад», сведения о нём и два
// списка самых известных работ. Каждый блок сам запрашивает свои данные,
// поэтому появляется, как только они пришли, и ошибка одного блока не прячет
// остальные. id берётся из адреса (/person/:id)
export function PersonDetailsWidget() {
    const id = parseId(useParams().id);

    // /person/abc: такой страницы нет, как и у любого другого неизвестного
    // адреса. Показываем тот же экран 404 и в сеть не ходим
    if (id === null) return <NotFound />;

    return (
        <div className={s.page}>
            <BackButton />
            {/* key: если id в адресе сменится без ухода со страницы, блоки до
                ответа показывали бы данные прошлого человека (RTK Query держит
                в data результат предыдущего аргумента) */}
            <div key={id} className={s.content}>
                <PersonInfo id={id} />
                <PersonCredits mediaType="movie" id={id} />
                <PersonCredits mediaType="tv" id={id} />
            </div>
        </div>
    );
}
