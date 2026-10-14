import s from './Preloader.module.css';

// Прелоадер на весь экран: показывается, пока скрипты приложения ещё грузятся
// и запускаются (см. HydrateFallback в app/root.tsx). React Router вшивает эту
// разметку в index.html при сборке, и браузер рисует её до загрузки бандла,
// поэтому здесь только HTML и CSS — без MUI и всего, что требует JS
export function Preloader() {
    return (
        <div className={s.preloader} role="status" aria-label="Загрузка">
            <div className={s.spinner} />
        </div>
    );
}
