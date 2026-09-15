import s from './Burger.module.css';

type Props = {
    isOpen: boolean;
    onToggle: () => void;
};

export function BurgerButton({ isOpen, onToggle }: Props) {
    return (
        <button
            className={s.burgerButton}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={onToggle}
            data-open={isOpen}
        >
            <span className={s.burgerLine} />
            <span className={s.burgerLine} />
            <span className={s.burgerLine} />
        </button>
    );
}
