import { SEARCH_TABS, type SearchType } from '../model/searchTabs';
import s from './SearchTabs.module.css';

type Props = {
    value: SearchType;
    // Сколько всего нашлось по каждому типу; undefined — ответ ещё не пришёл
    counts: Record<SearchType, number | undefined>;
    onChange: (type: SearchType) => void;
};

// Переключатель вида выдачи со счётчиками. Сам ничего не грузит: активный тип
// и счётчики приходят сверху
export function SearchTabs({ value, counts, onChange }: Props) {
    return (
        <div className={s.tabs} role="group" aria-label="Тип результатов">
            {SEARCH_TABS.map(({ type, label }) => {
                const count = counts[type];

                return (
                    <button
                        key={type}
                        type="button"
                        className={type === value ? s.tabActive : s.tab}
                        onClick={() => onChange(type)}
                        aria-pressed={type === value}
                    >
                        {label}
                        {/* Пока счёта нет, пилюля пустая, но того же размера:
                            вкладки не прыгают, когда приходит ответ */}
                        <span className={s.count}>
                            {count === undefined
                                ? ' '
                                : count.toLocaleString('ru-RU')}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
