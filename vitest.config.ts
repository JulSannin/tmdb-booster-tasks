import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

// Отдельный от vite.config.ts файл: плагин React Router нужен dev-серверу и
// сборке, а в тестах он только мешает. Алиас @ приходится повторить
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./src/shared/test/setup.ts'],
    env: {
      // Подставной токен: тесты не должны брать настоящий из .env
      VITE_TMDB_API_READ_ACCESS_TOKEN: 'test-token',
    },
  },
});
