import { profileUrl } from '@/shared/lib';

type PersonResult = {
    id?: number;
    name?: string;
    // у людей без фото приходит null
    profile_path?: string | null;
    known_for_department?: string;
    // у фильмов название лежит в title, у сериалов — в name
    known_for?: { title?: string; name?: string }[];
};

// Чем известен человек: до трёх работ через запятую, а если их нет — его
// направление (Acting, Directing, ...)
function getInfo(person: PersonResult) {
    const titles = (person.known_for ?? [])
        .map((work) => work.title ?? work.name)
        .filter(Boolean)
        .slice(0, 3);

    return titles.length
        ? titles.join(', ')
        : (person.known_for_department ?? '');
}

type CastMember = {
    id?: number;
    name?: string;
    // у актёров без фото приходит null
    profile_path?: string | null;
    character?: string;
};

// Актёры из /credits: в подписи под именем стоит роль. Список приходит
// отсортированным по порядку в титрах. Если актёр сыграл несколько ролей, он
// встречается в нём несколько раз — оставляем первую, главную: карточки
// различаются по id человека
export function mapCast(cast: CastMember[]) {
    const seen = new Set<number>();
    const cards: {
        id: number;
        name: string;
        photoUrl: string;
        info: string;
    }[] = [];

    for (const member of cast) {
        if (
            member.id === undefined ||
            member.name === undefined ||
            seen.has(member.id)
        ) {
            continue;
        }
        seen.add(member.id);
        cards.push({
            id: member.id,
            name: member.name,
            photoUrl: profileUrl(member.profile_path),
            info: member.character ?? '',
        });
    }

    return cards;
}

export function mapPersons(results: PersonResult[]) {
    return results
        .filter(
            (p): p is typeof p & { id: number; name: string } =>
                p.id !== undefined && p.name !== undefined
        )
        .map((p) => ({
            id: p.id,
            name: p.name,
            photoUrl: profileUrl(p.profile_path),
            info: getInfo(p),
        }));
}
