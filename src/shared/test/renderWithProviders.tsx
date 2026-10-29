import type { ReactElement } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { baseApi } from '@/shared/api';

// Свой стор на каждый тест: общий кэш RTK Query перетекал бы из теста в тест
function createTestStore() {
    return configureStore({
        reducer: { [baseApi.reducerPath]: baseApi.reducer },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });
}

// Рисует компонент в тех же обёртках, что и приложение: Redux-стор с RTK Query
// и роутер. route — адрес, с которого начинается тест. Роутер отдаётся наружу,
// чтобы после действий пользователя можно было проверить адрес:
// router.state.location.search
export function renderWithProviders(ui: ReactElement, { route = '/' } = {}) {
    const store = createTestStore();
    const router = createMemoryRouter([{ path: '*', element: ui }], {
        initialEntries: [route],
    });

    const result = render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

    return { ...result, store, router };
}
