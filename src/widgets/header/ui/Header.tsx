import { NavLink } from 'react-router';
import { menu } from '@/shared/model';
import { ThemeToggle } from '@/shared/theme-toggle';
import { useBurgerMenu } from '../model/useBurgerMenu';
import { BurgerButton } from './BurgerButton';
import { BurgerMenu } from './BurgerMenu';
import { HeaderMenuGroup } from './HeaderMenuGroup';
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
                    {/* Логотип-ссылка на главную. Картинка берётся напрямую с CDN TMDB, */}
                    {/* а не импортируется как локальный файл */}
                    <NavLink to="/" className={s.headerLogo}>
                        <img
                            src="https://www.themoviedb.org/assets/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            width={128}
                        />
                    </NavLink>
                    <nav className={s.headerNav}>
                        <ul className={s.headerMenu}>
                            {menu.map((group) => (
                                <HeaderMenuGroup key={group.id} group={group} />
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
