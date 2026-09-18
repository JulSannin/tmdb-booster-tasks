import { NavLink } from 'react-router';
import {
    Drawer,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import type { NavGroup } from '@/shared/model';
import s from './Burger.module.css';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    menu: NavGroup[];
};

export function BurgerMenu({ isOpen, onClose, menu }: Props) {
    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
            slotProps={{ paper: { className: s.burgerMenu } }}
        >
            <nav>
                {menu.map((group) => (
                    <Accordion
                        key={group.id}
                        className={s.burgerGroup}
                        elevation={0}
                        disableGutters
                    >
                        <AccordionSummary
                            expandIcon={<span className={s.chevron}>›</span>}
                        >
                            {group.label}
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={s.burgerGroupList}>
                                {group.items.map((link) => (
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
                        </AccordionDetails>
                    </Accordion>
                ))}
            </nav>
        </Drawer>
    );
}
