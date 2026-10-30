// id из адреса пишет пользователь: /movie/abc, /movie/-5 и /movie/1e3 нельзя
// отправлять в TMDB. Возвращает положительное целое или null
export function parseMediaId(value?: string) {
    if (!value || !/^\d+$/.test(value)) return null;

    const id = Number(value);
    return Number.isSafeInteger(id) && id > 0 ? id : null;
}
