import { TMDB_IMAGE_URL } from '@/shared/config';

// Заглушка лежит в public/ и отдаётся с нашего же домена: внешний сервис
// (placehold.co) бывает недоступен — тогда на каждую карточку без постера
// браузер ждал таймаут и сыпал ошибки в консоль
const NO_POSTER_URL = '/no-poster.svg';

// Карточкам хватает w500. Постеру на странице деталей, который показывается
// крупно, нужен w780: иначе на экранах с плотностью 2x он выглядит мыльным
export function posterUrl(path?: string, size: 'w500' | 'w780' = 'w500') {
    return path ? `${TMDB_IMAGE_URL}/${size}${path}` : NO_POSTER_URL;
}
