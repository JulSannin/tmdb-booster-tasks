import { useState } from 'react';

export function ThemeToggle() {
    // При первом рендере смотрим, что уже стоит на <html data-theme="...">.
    // Этот атрибут мог поставить либо сам пользователь раньше (сохранено
    // в localStorage и восстановлено инлайн-скриптом в root.tsx до отрисовки),
    // либо мы попадаем сюда без явного выбора — тогда смотрим на системную тему.
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const storedTheme = document.documentElement.dataset.theme as
            'light' | 'dark' | undefined;

        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });

    // Переключаем: меняем атрибут на <html> (от него зависят все CSS-токены
    // темы), запоминаем выбор в localStorage, чтобы при следующей загрузке
    // страницы инлайн-скрипт в root.tsx восстановил именно его
    function toggle() {
        const next = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
        setTheme(next);
    }

    return <button onClick={toggle}>{theme === 'dark' ? '☀️' : '🌙'}</button>;
}
