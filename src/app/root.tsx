import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { store } from './model/store';
// Шрифт лежит в node_modules (пакет @fontsource) — файлы .woff2 попадут
// в сборку и будут грузиться с нашего домена, без обращения к Google Fonts
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/600.css';
import '@fontsource/source-sans-3/700.css';
import './styles/global.css';

// Layout отвечает за HTML-каркас страницы (<html>, <head>, <body>).
// React Router framework mode рендерит его один раз и переиспользует
// между переходами — сам контент страницы приходит через {children}.
export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
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
                {/* Восстанавливаем сохранённую тему СИНХРОННО, до первой отрисовки. */}
                {/* React рендерится позже, поэтому сделать это его средствами */}
                {/* нельзя — будет видна вспышка не той темы (FOUC) */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    try {
                        let theme = localStorage.getItem('theme');
                        if (theme) document.documentElement.dataset.theme = theme;
                    } catch (e) {}
                     `,
                    }}
                />
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
            {/* main растягивается на всё свободное место (flex: 1 в global.css), */}
            {/* поэтому Footer всегда прижат к низу, даже на короткой странице */}
            <main>
                {/* Outlet — место, куда React Router подставляет текущую страницу */}
                <Outlet />
            </main>
            <Footer />
        </Provider>
    );
}

// Показывается, пока страница ещё грузится/гидратируется на клиенте
export function HydrateFallback() {
    return <p>Загрузка...</p>;
}
