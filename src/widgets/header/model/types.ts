// Обычный пункт меню: просто ссылка с текстом
export type NavItem = { to: string; label: string };
// Пункт меню с выпадающим списком: своя ссылка + вложенные пункты
export type NavGroup = {
    label: string;
    to?: string;
    items: NavItem[];
};
// Пункт меню может быть либо обычной ссылкой, либо группой с выпадающим списком
export type MenuEntry = NavItem | NavGroup;
