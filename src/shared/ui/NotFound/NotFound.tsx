import { Link } from 'react-router';
import s from './NotFound.module.css';

// Экран «Страница не найдена»: его показывает страница для несуществующих
// адресов и страницы деталей, когда в адресе мусор вместо id. Кнопка ведёт
// на главную
export function NotFound() {
    return (
        <div className={s.notFound}>
            {/* Крупная цифра только для вида, смысл несёт заголовок */}
            <p className={s.code} aria-hidden="true">
                404
            </p>
            <h1 className={s.title}>Страница не найдена</h1>
            <p className={s.text}>
                Возможно, адрес введён с ошибкой или страницы больше нет.
            </p>
            <Link className={s.home} to="/">
                На главную
            </Link>
        </div>
    );
}
