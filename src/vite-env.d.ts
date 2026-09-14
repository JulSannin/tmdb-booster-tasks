/// <reference types="vite/client" />

// Описываем свои переменные окружения (.env), чтобы TypeScript знал про
// import.meta.env.VITE_... и не ругался/не давал "any"
interface ImportMetaEnv {
    readonly VITE_TMDB_API_READ_ACCESS_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
