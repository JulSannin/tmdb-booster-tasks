import { setupServer } from 'msw/node';

// Один на все тесты: запускается и сбрасывается в setup.ts, а ответы под
// конкретный тест добавляются через server.use(...)
export const server = setupServer();
