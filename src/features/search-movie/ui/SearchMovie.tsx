import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { TextField, Button } from '@mui/material';
import s from './SearchMovie.module.css';

type Props = {
    // Что делать с введённым запросом решает вызывающая страница:
    // на главной это переход на /search?query=..., на самой странице
    // Search — обновление её собственных searchParams на месте
    onSubmit: (query: string) => void;
};

// Форма поиска фильма — переиспользуется и в Welcome Section, и на Search Page
export function SearchMovie({ onSubmit }: Props) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

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
                placeholder="Название фильма"
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
