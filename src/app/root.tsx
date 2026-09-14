import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Header } from '@/widgets/header';
import { store } from './model/store';
import './styles/global.css';

// Layout отвечает за HTML-каркас страницы (<html>, <head>, <body>).
// React Router framework mode рендерит его один раз и переиспользует
// между переходами — сам контент страницы приходит через {children}.
export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>TMDB Booster</title>
                {/* Meta и Links — служебные компоненты React Router, */}
                {/* подставляют теги <meta>/<link>, которые задают сами страницы */}
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                {/* Восстанавливает позицию скролла при переходах назад/вперёд */}
                <ScrollRestoration />
                {/* Подключает JS-бандлы приложения */}
                <Scripts />
            </body>
        </html>
    );
}

// Root — корневой компонент самого приложения (уже внутри <body>).
// Оборачиваем всё в Provider, чтобы Redux-store был доступен любому
// компоненту через хуки (useSelector/useDispatch).
export default function Root() {
    return (
        <Provider store={store}>
            {/* Header рендерится здесь, а не в Layout, поэтому он часть */}
            {/* React-дерева приложения и не пересоздаётся при смене страниц */}
            <Header />
            {/* Outlet — место, куда React Router подставляет текущую страницу */}
            <Outlet />
        </Provider>
    );
}

// Показывается, пока страница ещё грузится/гидратируется на клиенте
export function HydrateFallback() {
    return <p>Загрузка...</p>;
}
