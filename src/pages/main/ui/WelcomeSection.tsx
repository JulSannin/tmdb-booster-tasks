import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGet3MoviePopularQuery } from '../api/api';
import { TMDB_IMAGE_URL } from '@/shared/config';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import { SearchMovie } from '@/features/search-movie';
import s from './WelcomeSectiom.module.css';

// Приветственный блок на главной: случайная обложка из популярных фильмов
// на фоне
export function WelcomeSection() {
    const navigate = useNavigate();
    const { data, isLoading, isFetching, isError } = useGet3MoviePopularQuery(
        {}
    );

    // Случайное число фиксируем один раз при монтировании (лениво, через
    // функцию-инициализатор), иначе при каждом ре-рендере (например, когда
    // isFetching меняется) обложка бы "прыгала" на другой фильм
    const [seed] = useState(() => Math.random());

    const withBackdrop = (data?.results ?? []).filter(
        (movie) => movie.backdrop_path
    );
    const backdropUrl = withBackdrop.length
        ? `${TMDB_IMAGE_URL}/original${
              withBackdrop[Math.floor(seed * withBackdrop.length)].backdrop_path
          }`
        : undefined;

    return (
        <DataWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
        >
            <section
                className={s.welcomeSection}
                style={
                    backdropUrl
                        ? { backgroundImage: `url(${backdropUrl})` }
                        : undefined
                }
            >
                <h1>Добро пожаловать</h1>
                <p>Миллион фильмов, сериалов и людей. Исследуйте сейчас</p>
                <SearchMovie
                    onSubmit={(query) =>
                        navigate(
                            query
                                ? `/search?query=${encodeURIComponent(query)}`
                                : '/search'
                        )
                    }
                />
            </section>
        </DataWrapper>
    );
}
