import s from './MediaTypeToggle.module.css';

export type MediaType = 'movie' | 'tv';

const OPTIONS: { value: MediaType; label: string }[] = [
    { value: 'movie', label: 'Фильмы' },
    { value: 'tv', label: 'ТВ-шоу' },
];

type Props = {
    value: MediaType;
    onChange: (value: MediaType) => void;
};

export function MediaTypeToggle({ value, onChange }: Props) {
    return (
        <div className={s.toggle} role="group" aria-label="Тип контента">
            {OPTIONS.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={
                        value === option.value ? s.optionActive : s.option
                    }
                    onClick={() => onChange(option.value)}
                    aria-pressed={value === option.value}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
