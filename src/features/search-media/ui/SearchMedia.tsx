import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { TextField, Button } from '@mui/material';
import s from './SearchMedia.module.css';

type Props = {
    // Что делать с введённым запросом решает вызывающая страница:
    // на главной это переход на /search?query=..., на самой странице
    // Search — обновление её собственных searchParams на месте
    onSubmit: (query: string) => void;
    // Запрос, с которого начинается поле: на Search Page это query из URL,
    // чтобы после перезагрузки в поле было то, что ищется
    initialQuery?: string;
};

// Форма поиска — переиспользуется и в Welcome Section, и на Search Page
export function SearchMedia({ onSubmit, initialQuery = '' }: Props) {
    const [query, setQuery] = useState(initialQuery);
    const inputRef = useRef<HTMLInputElement>(null);

    // Если initialQuery поменялся снаружи (кнопка «назад», переход на чистый
    // /search), поле берёт новое значение. Подстройка прямо во время рендера,
    // а не в эффекте: так нет лишней отрисовки со старым текстом, а поле не
    // пересоздаётся и не теряет фокус. Пока initialQuery не менялся, набранный
    // текст не трогаем
    const [prevInitialQuery, setPrevInitialQuery] = useState(initialQuery);
    if (initialQuery !== prevInitialQuery) {
        setPrevInitialQuery(initialQuery);
        setQuery(initialQuery);
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(query.trim());
    }

    // У <input type="search"> есть нативное событие `search` — срабатывает
    // на Enter и на клик по встроенному крестику очистки поля (но не на
    // обычный backspace). В типах React его нет, поэтому вешаем вручную
    useEffect(() => {
        const input = inputRef.current;
        if (!input) return;

        function handleNativeSearch(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            if (!value) onSubmit('');
        }

        input.addEventListener('search', handleNativeSearch);
        return () => input.removeEventListener('search', handleNativeSearch);
    }, [onSubmit]);

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <TextField
                className={s.input}
                inputRef={inputRef}
                type="search"
                size="small"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie, TV show, person..."
            />
            <Button
                className={s.button}
                type="submit"
                variant="contained"
                disabled={!query.trim()}
            >
                Search
            </Button>
        </form>
    );
}
