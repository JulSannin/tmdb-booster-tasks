import { WelcomeSection } from './WelcomeSection';
import { PopularMoviesSection } from './PopularMoviesSection';
import { TopRatedMoviesSection } from './TopRatedMoviesSection';
import { UpcomingMoviesSection } from './UpcomingMoviesSection';
import { NowPlayingMoviesSection } from './NowPlayingMoviesSection';

export function MainPage() {
    return (
        <>
            <WelcomeSection />
            <PopularMoviesSection />
            <TopRatedMoviesSection />
            <UpcomingMoviesSection />
            <NowPlayingMoviesSection />
        </>
    );
}
