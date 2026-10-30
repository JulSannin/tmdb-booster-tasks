// Какую страницу деталей показывает виджет: фильма или сериала. Блоки виджета
// получают его вместе с id и сами выбирают нужные эндпоинты
export type MediaType = 'movie' | 'tv';

export type BlockProps = {
    mediaType: MediaType;
    id: number;
};
