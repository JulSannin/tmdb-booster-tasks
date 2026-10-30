type Credit = { id?: number; popularity?: number; character?: string };

// «Self», «Himself», «Herself»: человек играет самого себя, то есть сидит в
// ток-шоу, на церемонии или в документальном фильме. По популярности такие
// записи вытесняют настоящие роли
const SELF = /^(self|himself|herself|themselves)\b/i;

// Работы человека для блока: самые популярные, не больше limit. Берём роли
// (cast без «Self»); нет ролей — работу за кадром (crew): у режиссёров и
// сценаристов в cast почти пусто. Нет и её — то, что осталось в cast. Одного
// человека в фильме могут записать несколько раз (режиссёр и сценарист, две
// роли), поэтому записи с одним id схлопываются: карточки в сетке различаются
// по id
export function pickCredits<T extends Credit>(
    credits: { cast?: T[]; crew?: T[] } | undefined,
    limit: number
): T[] {
    const cast = credits?.cast ?? [];
    const crew = credits?.crew ?? [];
    const roles = cast.filter((credit) => !SELF.test(credit.character ?? ''));
    const source = roles.length > 0 ? roles : crew.length > 0 ? crew : cast;

    const seen = new Set<number>();

    return source
        .filter((credit) => {
            if (credit.id === undefined || seen.has(credit.id)) return false;
            seen.add(credit.id);
            return true;
        })
        .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))
        .slice(0, limit);
}
