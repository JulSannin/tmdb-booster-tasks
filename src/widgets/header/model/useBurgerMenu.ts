import { useState } from 'react';

// Состояние бургер-меню (открыто/закрыто) + управление им. Блокировку
// скролла и закрытие по Escape теперь берёт на себя сам MUI Drawer
export function useBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
        close: () => setIsOpen(false),
    };
}
