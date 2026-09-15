import { useEffect } from 'react';
import { NavLink } from 'react-router';
import type { NavGroup } from '@/shared/model';
import s from './Burger.module.css';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    menu: NavGroup[];
};

export function BurgerMenu({ isOpen, onClose, menu }: Props) {
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <>
            <nav id="mobile-menu" className={s.burgerMenu} data-open={isOpen}>
                {/* key меняется при каждом закрытии/открытии — React пересоздаёт */}
                {/* список заново, и все <details> возвращаются в закрытое состояние */}
                {/* (само по себе isOpen на состояние <details> не влияет, оно у них своё) */}
                <ul className={s.burgerMenuList} key={String(isOpen)}>
                    {menu.map((links) => (
                        <li key={links.id}>
                            {/* Одинаковый name у всех <details> — браузер сам */}
                            {/* закрывает остальные при открытии одного (Exclusive Accordion) */}
                            <details
                                name="burger-accordion"
                                className={s.burgerGroup}
                            >
                                <summary className={s.burgerGroupLabel}>
                                    {links.label}
                                </summary>
                                <ul className={s.burgerGroupList}>
                                    {links.items.map((link) => (
                                        <li key={link.to}>
                                            <NavLink
                                                to={link.to}
                                                end
                                                onClick={onClose}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? `${s.burgerLink} ${s.burgerLinkActive}`
                                                        : s.burgerLink
                                                }
                                            >
                                                {link.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
