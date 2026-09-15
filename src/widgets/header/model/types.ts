// Обычный пункт меню: просто ссылка с текстом
export type NavItem = { to: string; label: string };
// Пункт меню с выпадающим списком (сам не ссылка, просто заголовок-триггер,
// см. Header.tsx). id нужен как React key — у группы нет своего URL
export type NavGroup = {
    id: number;
    label: string;
    items: NavItem[];
};
