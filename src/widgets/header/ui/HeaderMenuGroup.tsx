import { useRef, useState, type MouseEvent } from 'react';
import { NavLink, useLocation } from 'react-router';
import {
    Popper,
    Paper,
    MenuList,
    MenuItem,
    ClickAwayListener,
} from '@mui/material';
import type { NavGroup } from '@/shared/model';
import s from './Header.module.css';

type Props = { group: NavGroup };

const CLOSE_DELAY = 150;

export function HeaderMenuGroup({ group }: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const location = useLocation();

    function openMenu(e: MouseEvent<HTMLButtonElement>) {
        clearTimeout(closeTimeoutRef.current);
        setAnchorEl(e.currentTarget);
    }

    function closeMenu() {
        clearTimeout(closeTimeoutRef.current);
        setAnchorEl(null);
    }

    // Курсор при переходе от кнопки к списку идёт через "пустоту" между
    // ними — поэтому закрытие откладываем на CLOSE_DELAY: если за это время
    // навели на сам список (там тоже висит cancelClose), закрытие отменяется
    function scheduleClose() {
        closeTimeoutRef.current = setTimeout(
            () => setAnchorEl(null),
            CLOSE_DELAY
        );
    }

    function cancelClose() {
        clearTimeout(closeTimeoutRef.current);
    }

    return (
        <li className={s.headerMenuItem}>
            <button
                type="button"
                className={s.headerLink}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
                onClick={openMenu}
            >
                {group.label}
            </button>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="bottom-start"
            >
                <ClickAwayListener onClickAway={closeMenu}>
                    <Paper
                        className={s.headerMenuPaper}
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                    >
                        <MenuList>
                            {group.items.map((item) => (
                                <MenuItem
                                    key={item.to}
                                    component={NavLink}
                                    to={item.to}
                                    selected={location.pathname === item.to}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </li>
    );
}
