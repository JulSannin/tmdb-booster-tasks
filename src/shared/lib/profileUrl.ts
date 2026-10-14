import { TMDB_IMAGE_URL } from '@/shared/config';

// Заглушка лежит в public/ и отдаётся с нашего домена — как и у постеров
const NO_PHOTO_URL = '/no-photo.svg';

// У фото людей в TMDB свои размеры (w45, w185, h632, original), не такие, как
// у постеров. h632 достаточно резкий для карточек в сетке и намного легче
// original. profile_path у людей бывает null, а не только undefined
export function profileUrl(path?: string | null) {
    return path ? `${TMDB_IMAGE_URL}/h632${path}` : NO_PHOTO_URL;
}
