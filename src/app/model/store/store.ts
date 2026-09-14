import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';

// Единственный Redux-store приложения.
export const store = configureStore({
    reducer: {
        // RTK Query хранит свой кэш запросов под этим ключом в сторе
        [baseApi.reducerPath]: baseApi.reducer,
    },

    // Добавляем middleware от RTK Query — без него не будут работать
    // кэширование, повторные запросы, инвалидация и т.д.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Типы стора, чтобы useSelector/useDispatch знали форму состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
