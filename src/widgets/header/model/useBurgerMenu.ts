import { useEffect, useState } from 'react';

// Состояние бургер-меню (открыто/закрыто) + управление им
export function useBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Пока меню открыто, блокируем скролл страницы за ним
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
        close: () => setIsOpen(false),
    };
}
