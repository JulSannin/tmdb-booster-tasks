import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './server';

// Запрос без обработчика не уходит в настоящий TMDB: msw обрывает его ошибкой
// и пишет в консоль, на какой адрес не нашлось ответа. В msw 3 опция зовётся
// onUnhandledFrame (в msw 2 было onUnhandledRequest), по умолчанию там только
// предупреждение, а сам запрос уходит в сеть
beforeAll(() => server.listen({ onUnhandledFrame: 'error' }));

afterEach(() => {
    // Сам Testing Library размонтирует компоненты только при globals: true,
    // а у нас импорты из vitest явные
    cleanup();
    server.resetHandlers();
});

afterAll(() => server.close());
