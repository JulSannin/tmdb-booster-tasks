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
