import { useSearchParams } from 'react-router';
import { SearchMedia } from '@/features/search-media';
import { parsePage, parseSearchType } from '../model/searchParams';
import type { SearchType } from '../model/searchTabs';
import { SearchResults } from './SearchResults';
import s from './SearchWidget.module.css';

// Поиск целиком: форма и выдача по query из URL. Всё состояние лежит в
// searchParams: ?query=...&type=movie|tv|person&page=N
export function SearchWidget() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = (searchParams.get('query') ?? '').trim();
    const type = parseSearchType(searchParams.get('type'));
    const page = parsePage(searchParams.get('page'));

    function submitQuery(nextQuery: string) {
        if (!nextQuery) {
            // Крестик в поле или пустой ввод: возвращаем страницу в исходное
            // состояние, как будто на неё только что зашли
            setSearchParams({});
            return;
        }

        // Новый запрос начинает с первой страницы, а выбранная вкладка остаётся
        setSearchParams((prev) => {
            prev.set('query', nextQuery);
            prev.delete('page');
            return prev;
        });
    }

    function changeType(nextType: SearchType) {
        // Клик по уже активной вкладке ничего не меняет: иначе слетала бы
        // страница и в истории копились бы одинаковые записи
        if (nextType === type) return;

        setSearchParams((prev) => {
            prev.set('type', nextType);
            prev.delete('page');
            return prev;
        });
    }

    function changePage(nextPage: number) {
        setSearchParams((prev) => {
            prev.set('page', String(nextPage));
            return prev;
        });
    }

    return (
        <div className={s.page}>
            <SearchMedia initialQuery={query} onSubmit={submitQuery} />

            {query ? (
                <SearchResults
                    key={query}
                    query={query}
                    type={type}
                    page={page}
                    onTypeChange={changeType}
                    onPageChange={changePage}
                />
            ) : (
                <p className={s.message}>
                    Введите название фильма, сериала или имя человека, чтобы
                    начать поиск
                </p>
            )}
        </div>
    );
}
