import { NavLink } from 'react-router';
import { menu } from '@/shared/model';
import Logo from './header-logo.svg';
import { ThemeToggle } from '@/shared/theme-toggle';
import { useBurgerMenu } from '../model/useBurgerMenu';
import { BurgerButton } from './BurgerButton';
import { BurgerMenu } from './BurgerMenu';
import s from './Header.module.css';

export function Header() {
    const burger = useBurgerMenu();
    return (
        <>
            <header className={s.header}>
                <div className={s.headerContent}>
                    <BurgerButton
                        isOpen={burger.isOpen}
                        onToggle={burger.toggle}
                    />
                    {/* Логотип-ссылка на главную. SVG импортируется как файл — */}
                    {/* Vite подставит сюда путь до собранного ассета */}
                    <NavLink to="/" className={s.headerLogo}>
                        <img src={Logo} width={128} />
                    </NavLink>
                    <nav className={s.headerNav}>
                        <ul className={s.headerMenu}>
                            {/* Рендерим каждый пункт меню из shared/model (общий с Footer) */}
                            {menu.map((links) => (
                                <li className={s.headerMenuItem} key={links.id}>
                                    {/* Не NavLink: у группы своего адреса нет, */}
                                    {/* это просто заголовок, открывающий дропдаун по hover/focus */}
                                    <span className={s.headerLink}>
                                        {links.label}
                                    </span>
                                    <ul className={s.headerDropdown}>
                                        {links.items.map((link) => (
                                            <li key={link.to}>
                                                <NavLink
                                                    to={link.to}
                                                    end
                                                    // Снимаем фокус после клика, чтобы дропдаун не оставался открытым
                                                    // из-за :focus-within в CSS
                                                    onClick={(e) =>
                                                        e.currentTarget.blur()
                                                    }
                                                    className={({
                                                        isActive,
                                                    }) =>
                                                        isActive
                                                            ? `${s.headerDropdownLink} ${s.headerDropdownLinkActive}`
                                                            : s.headerDropdownLink
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Кнопка-переключатель светлой/тёмной темы, см. shared/theme-toggle */}
                    <ThemeToggle />
                </div>
            </header>
            <BurgerMenu
                isOpen={burger.isOpen}
                onClose={burger.close}
                menu={menu}
            />
        </>
    );
}
