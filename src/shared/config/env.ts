// Переменные окружения из .env (доступны только с префиксом VITE_,
// см. VITE_TMDB_API_READ_ACCESS_TOKEN в .env)
export const VITE_TMDB_READ_ACCESS_TOKEN = import.meta.env
    .VITE_TMDB_API_READ_ACCESS_TOKEN;

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p';
