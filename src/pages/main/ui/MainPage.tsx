import {
    PopularCarousel,
    TopRatedCarousel,
    UpcomingCarousel,
    NowPlayingCarousel,
} from '@/widgets/media-carousel';
import { WelcomeSection } from './WelcomeSection';

export function MainPage() {
    return (
        <>
            <WelcomeSection />
            <PopularCarousel />
            <TopRatedCarousel />
            <UpcomingCarousel />
            <NowPlayingCarousel />
        </>
    );
}
