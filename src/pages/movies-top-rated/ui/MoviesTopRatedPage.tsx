import { MediaCategoryWidget } from '@/widgets/media-category';

export function MoviesTopRatedPage() {
    return (
        <MediaCategoryWidget mediaType="movie" defaultCategory="top_rated" />
    );
}
