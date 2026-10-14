import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Chrome DevTools сам запрашивает у dev-сервера этот служебный файл. Роута под
// него нет, поэтому React Router на каждый запрос печатал в терминал ошибку 404.
// Отвечаем 404 раньше, чем запрос дойдёт до React Router: файл нам не нужен
function ignoreChromeDevtoolsProbe(): Plugin {
  return {
    name: 'ignore-chrome-devtools-probe',
    configureServer(server) {
      server.middlewares.use(
        '/.well-known/appspecific/com.chrome.devtools.json',
        (_req, res) => {
          res.statusCode = 404;
          res.end();
        }
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), ignoreChromeDevtoolsProbe()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
