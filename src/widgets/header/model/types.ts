// Обычный пункт меню: просто ссылка с текстом
export type NavItem = { to: string; label: string };
// Пункт меню с выпадающим списком
export type NavGroup = {
    id: number;
    label: string;
    items: NavItem[];
};
