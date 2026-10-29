import { useSearchParams } from 'react-router';
import { Pagination } from '@mui/material';
import { PersonGrid, mapPersons } from '@/entities/person';
import { useGet3PersonPopularQuery } from '../api/api';
import s from './PersonsPopularPage.module.css';

// По документации TMDB страниц в списке не больше 500 — дальше листать нельзя
const MAX_PAGE = 500;

export function PersonsPopularPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Номер страницы лежит в URL (?page=2), поэтому его могут испортить руками:
    // всё, что не целое число от 1 до MAX_PAGE, приводим к допустимому значению
    const rawPage = Number(searchParams.get('page'));
    const page =
        Number.isInteger(rawPage) && rawPage >= 1
            ? Math.min(rawPage, MAX_PAGE)
            : 1;

    const { data, isLoading, isFetching, isError } = useGet3PersonPopularQuery({
        page,
    });

    const totalPages = Math.min(data?.total_pages ?? MAX_PAGE, MAX_PAGE);

    function changePage(nextPage: number) {
        setSearchParams({ page: String(nextPage) });
    }

    return (
        <div className={s.page}>
            <h1 className={s.title}>Популярные люди</h1>
            <PersonGrid
                cards={mapPersons(data?.results ?? [])}
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
            />
            <div className={s.paginationWrap}>
                <Pagination
                    page={page}
                    count={totalPages}
                    onChange={(_, nextPage) => changePage(nextPage)}
                />
            </div>
        </div>
    );
}
