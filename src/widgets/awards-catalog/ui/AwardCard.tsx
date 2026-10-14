import { TMDB_IMAGE_URL } from '@/shared/config';
import type { Award } from '../model/awards';
import s from './AwardCard.module.css';

const AWARD_URL = 'https://www.themoviedb.org/award';
// Заглушка лежит в public/ и отдаётся с нашего домена — как и у постеров
const NO_LOGO_URL = '/no-logo.svg';

const dateFormat = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' });

// "2026-03-15" -> "15 марта 2026". Дату собираем из частей, а не через
// new Date('2026-03-15'): такая строка разбирается как UTC и в части часовых
// поясов показывала бы предыдущий день. Intl дописывает к году « г.», на TMDB
// этого нет
function formatDate(iso: string) {
    const [year, month, day] = iso.split('-').map(Number);
    return dateFormat
        .format(new Date(year, month - 1, day))
        .replace(/\s*г\.$/, '');
}

// Логотипы лежат на том же CDN, что и постеры, но размеров у них свои: квадрат
// w300_and_h300_face, а для плотных экранов вдвое больше
function logoUrl(path: string, size: 300 | 600) {
    return `${TMDB_IMAGE_URL}/w${size}_and_h${size}_face${path}`;
}

type Props = Pick<Award, 'id' | 'name' | 'latestCeremony' | 'logo'>;

// Карточка премии, как на TMDB: логотип, название и дата последней церемонии.
// Вся карточка — ссылка на страницу премии на themoviedb.org: своей страницы у
// премий в приложении нет. Логотип декоративный (alt пустой): название стоит
// рядом, в той же ссылке. Данные статичные и не подгружаются, поэтому высоту
// под текст не резервируем: карточки в ряду тянутся до самой высокой (см. .item
// в AwardsList.module.css)
export function AwardCard({ id, name, latestCeremony, logo }: Props) {
    return (
        <a
            className={s.card}
            href={`${AWARD_URL}/${id}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={s.logo}>
                {logo ? (
                    <img
                        src={logoUrl(logo, 300)}
                        srcSet={`${logoUrl(logo, 300)} 1x, ${logoUrl(logo, 600)} 2x`}
                        alt=""
                        loading="lazy"
                    />
                ) : (
                    <img src={NO_LOGO_URL} alt="" />
                )}
            </div>
            <div className={s.footer}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.date}>{formatDate(latestCeremony)}</p>
            </div>
        </a>
    );
}
