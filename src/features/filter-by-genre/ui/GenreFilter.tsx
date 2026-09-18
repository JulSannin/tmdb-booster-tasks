import s from './GenreFilter.module.css';

type Genre = { id: number; name: string };

type Props = {
    genres: Genre[];
    value: number[];
    onChange: (value: number[]) => void;
};

export function GenreFilter({ genres, value, onChange }: Props) {
    function toggle(id: number) {
        onChange(
            value.includes(id) ? value.filter((g) => g !== id) : [...value, id]
        );
    }

    return (
        <div className={s.list}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    type="button"
                    className={
                        value.includes(genre.id) ? s.genreActive : s.genre
                    }
                    onClick={() => toggle(genre.id)}
                    aria-pressed={value.includes(genre.id)}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
}
