import { NavLink } from 'react-router';
import { menu } from '@/shared/model';
import Logo from './footer-logo.svg';
import s from './Footer.module.css';

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footerContent}>
                <NavLink to="/" className={s.footerLogo}>
                    <img src={Logo} width={96} alt="TMDB" />
                </NavLink>
                {/* Колонка на каждый раздел: заголовок + все его ссылки сразу, */}
                {/* без сворачивания — не дропдаун, как в шапке, а статичный список */}
                <ul className={s.footerNav}>
                    {menu.map((group) => (
                        <li key={group.id} className={s.footerGroup}>
                            <span className={s.footerGroupLabel}>
                                {group.label}
                            </span>
                            <ul className={s.footerGroupList}>
                                {group.items.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            className={s.footerLink}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                {/* Обязательная атрибуция — условие использования TMDB API */}
                <p className={s.footerAttribution}>
                    Этот продукт использует TMDB API, но не одобрен и не
                    сертифицирован TMDB
                </p>
                <p className={s.footerCopyright}>
                    © {new Date().getFullYear()} TMDB Booster
                </p>
            </div>
        </footer>
    );
}
