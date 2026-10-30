import { posterUrl } from '@/shared/lib';

// Всё, что показывает блок с информацией. И фильм, и сериал приводятся к этому
// виду, поэтому сам блок про тип не знает
export type MediaInfoData = {
    title: string;
    posterUrl: string;
    // Пустая строка, если даты у TMDB нет (у неанонсированных бывает "")
    year: string;
    voteAverage?: number;
    genres: string[];
    // Сколько длится: у фильма время («2 ч 16 мин»), у сериала сезоны и серии
    // («8 сезонов · 73 серии»). Пустая строка, если TMDB этого не знает
    length: string;
    overview: string;
};

// "1999-03-30" -> "1999"
export function getYear(date?: string) {
    return date?.match(/^\d{4}/)?.[0] ?? '';
}

// 136 -> "2 ч 16 мин", 120 -> "2 ч", 45 -> "45 мин". У TMDB неизвестная
// длительность приходит как 0 или null
export function formatRuntime(minutes?: number | null) {
    if (!minutes || minutes < 0) return '';

    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;

    if (!hours) return `${rest} мин`;
    return rest ? `${hours} ч ${rest} мин` : `${hours} ч`;
}

const pluralRules = new Intl.PluralRules('ru');

// 1 сезон, 2 сезона, 5 сезонов. forms — слово для «один», «несколько», «много»
function pluralize(count: number, [one, few, many]: [string, string, string]) {
    const form = pluralRules.select(count);

    return `${count} ${form === 'one' ? one : form === 'few' ? few : many}`;
}

// 8, 73 -> "8 сезонов · 73 серии". У анонсированных сериалов TMDB присылает
// нули, их пропускаем
export function formatSeriesLength(seasons?: number, episodes?: number) {
    const parts: string[] = [];

    if (seasons && seasons > 0) {
        parts.push(pluralize(seasons, ['сезон', 'сезона', 'сезонов']));
    }
    if (episodes && episodes > 0) {
        parts.push(pluralize(episodes, ['серия', 'серии', 'серий']));
    }
    return parts.join(' · ');
}

function genreNames(genres: { name?: string }[] = []) {
    return genres.map((genre) => genre.name).filter(Boolean) as string[];
}

export function mapMovieDetails(movie: {
    title?: string;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    runtime?: number;
    genres?: { name?: string }[];
    vote_average?: number;
}): MediaInfoData {
    return {
        title: movie.title ?? '',
        posterUrl: posterUrl(movie.poster_path, 'w780'),
        year: getYear(movie.release_date),
        voteAverage: movie.vote_average,
        genres: genreNames(movie.genres),
        length: formatRuntime(movie.runtime),
        overview: movie.overview ?? '',
    };
}

export function mapTvDetails(show: {
    name?: string;
    overview?: string;
    poster_path?: string;
    first_air_date?: string;
    number_of_seasons?: number;
    number_of_episodes?: number;
    genres?: { name?: string }[];
    vote_average?: number;
}): MediaInfoData {
    return {
        title: show.name ?? '',
        posterUrl: posterUrl(show.poster_path, 'w780'),
        year: getYear(show.first_air_date),
        voteAverage: show.vote_average,
        genres: genreNames(show.genres),
        // episode_run_time (длительность серии) TMDB больше не заполняет: у
        // популярных сериалов там пустой массив. Сезоны и серии есть всегда
        length: formatSeriesLength(
            show.number_of_seasons,
            show.number_of_episodes
        ),
        overview: show.overview ?? '',
    };
}
