const pluralRules = new Intl.PluralRules('ru');

// 1 сезон, 2 сезона, 5 сезонов. forms — слово для «один», «несколько», «много»
export function pluralize(
    count: number,
    [one, few, many]: [string, string, string]
) {
    const form = pluralRules.select(count);

    return `${count} ${form === 'one' ? one : form === 'few' ? few : many}`;
}
