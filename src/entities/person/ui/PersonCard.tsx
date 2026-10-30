import s from './PersonCard.module.css';

export type PersonCardProps = {
    // Нужен только списку (key), сама карточка его не показывает
    id: number;
    name: string;
    // Готовый URL фото (или заглушка) — собирает mapPersons, как у MediaCard
    photoUrl: string;
    // Подпись под именем: чем известен (названия работ через запятую или
    // направление деятельности) либо роль, которую человек сыграл в фильме
    info: string;
};

// Карточка человека. Высота не зависит от текста: имя занимает одну строку,
// "известен по" — две (--name-line-height и --info-line-height в css), поэтому
// скелетон совпадает с ней по размеру и страница не прыгает после загрузки
export function PersonCard({ name, photoUrl, info }: PersonCardProps) {
    return (
        <div className={s.card}>
            <img className={s.photo} src={photoUrl} alt={name} />
            <div className={s.footer}>
                <p className={s.name} title={name}>
                    {name}
                </p>
                <p className={s.info}>{info}</p>
            </div>
        </div>
    );
}
