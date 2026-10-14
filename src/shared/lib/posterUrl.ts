import { TMDB_IMAGE_URL } from '@/shared/config';

// Заглушка лежит в public/ и отдаётся с нашего же домена: внешний сервис
// (placehold.co) бывает недоступен — тогда на каждую карточку без постера
// браузер ждал таймаут и сыпал ошибки в консоль
const NO_POSTER_URL = '/no-poster.svg';

export function posterUrl(path?: string) {
    return path ? `${TMDB_IMAGE_URL}/w500${path}` : NO_POSTER_URL;
}
