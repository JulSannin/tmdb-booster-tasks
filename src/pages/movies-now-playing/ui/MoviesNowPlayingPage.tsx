import { MediaCategoryWidget } from '@/widgets/media-category';

export function MoviesNowPlayingPage() {
    return (
        <MediaCategoryWidget mediaType="movie" defaultCategory="now_playing" />
    );
}
