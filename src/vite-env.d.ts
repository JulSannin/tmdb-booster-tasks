/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_READ_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
