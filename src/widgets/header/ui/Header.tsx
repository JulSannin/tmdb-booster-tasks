import { NavLink } from 'react-router';

import { isGroup, menu } from '../model/menu';

import s from './Header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            {/* Логотип-ссылка на главную */}
            <NavLink to="/" className={s.header_logo}>
                TMDB
            </NavLink>
            <nav className={s.header_nav}>
                <ul className={s.header_menu}>
                    {/* Рендерим каждый пункт меню из конфига выше */}
                    {menu.map((entry) => (
                        <li
                            className={s.header_group}
                            key={isGroup(entry) ? entry.label : entry.to}
                        >
                            {/* Для групп без ссылки рисуем обычный заголовок, для обычного пункта — NavLink */}
                            {isGroup(entry) ? (
                                <span className={s.header_link}>
                                    {entry.label}
                                </span>
                            ) : (
                                <NavLink
                                    to={entry.to}
                                    className={s.header_link}
                                >
                                    {entry.label}
                                </NavLink>
                            )}
                            {/* Если это группа — рисуем под ней выпадающий список подпунктов */}
                            {isGroup(entry) && (
                                <ul className={s.header_dropdown}>
                                    {entry.items.map((item) => (
                                        <li key={item.to}>
                                            <NavLink
                                                to={item.to}
                                                end
                                                // Снимаем фокус после клика, чтобы дропдаун не оставался открытым
                                                // из-за :focus-within в CSS
                                                onClick={(e) =>
                                                    e.currentTarget.blur()
                                                }
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? s[
                                                              'header_dropdown-link active'
                                                          ]
                                                        : s[
                                                              'header_dropdown-link'
                                                          ]
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
