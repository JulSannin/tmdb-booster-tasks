import { useSearchParams } from 'react-router';
import { Pagination } from '@mui/material';
import { profileUrl } from '@/shared/lib';
import { DataWrapper } from '@/shared/ui/DataWrapper';
import {
    useGet3PersonPopularQuery,
    type Get3PersonPopularApiResponse,
} from '../api/api';
import { PersonCard } from './PersonCard';
import { PersonCardSkeleton } from './PersonCardSkeleton';
import s from './PersonsPopularPage.module.css';

// По документации TMDB страниц в списке не больше 500 — дальше листать нельзя
const MAX_PAGE = 500;
// Столько людей приходит на одной странице. Скелетонов рисуем столько же,
// чтобы высота страницы не менялась после загрузки
const PAGE_SIZE = 20;

type Person = NonNullable<Get3PersonPopularApiResponse['results']>[number];

// Чем известен человек: до трёх работ через запятую, а если их нет — его
// направление (Acting, Directing, ...)
function getInfo(person: Person) {
    const titles = (person.known_for ?? [])
        .map((work) => work.title ?? work.name)
        .filter(Boolean)
        .slice(0, 3);

    return titles.length
        ? titles.join(', ')
        : (person.known_for_department ?? '');
}

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

    const persons = (data?.results ?? [])
        .filter(
            (p): p is typeof p & { id: number; name: string } =>
                p.id !== undefined && p.name !== undefined
        )
        .map((p) => ({
            id: p.id,
            name: p.name,
            photoUrl: profileUrl(p.profile_path),
            info: getInfo(p),
        }));

    const totalPages = Math.min(data?.total_pages ?? MAX_PAGE, MAX_PAGE);

    function changePage(nextPage: number) {
        setSearchParams({ page: String(nextPage) });
    }

    return (
        <div className={s.page}>
            <h1 className={s.title}>Популярные люди</h1>
            <DataWrapper
                isLoading={isLoading}
                isError={isError}
                isFetching={isFetching}
                skeleton={
                    <ul className={s.grid}>
                        {Array.from({ length: PAGE_SIZE }, (_, i) => (
                            <li key={i}>
                                <PersonCardSkeleton />
                            </li>
                        ))}
                    </ul>
                }
            >
                <ul className={s.grid}>
                    {persons.map((person) => (
                        <li key={person.id}>
                            <PersonCard
                                name={person.name}
                                photoUrl={person.photoUrl}
                                info={person.info}
                            />
                        </li>
                    ))}
                </ul>
            </DataWrapper>
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
