# Как искать нужный эндпоинт в TMDB API

Весь клиент уже сгенерирован (`src/shared/api/generated/tmdbApi.ts`) — не нужно
писать `fetch` руками, только найти готовый хук и вызвать его в компоненте.

## Как устроено имя хука

Имя = **HTTP-метод** + **путь запроса**, кусками с большой буквы. Параметры в
пути (`{movie_id}`) превращаются в `By...Id`.

| Путь                        | Метод | Имя хука                               |
| --------------------------- | ----- | -------------------------------------- |
| `/movie/popular`            | GET   | `useGet3MoviePopularQuery`             |
| `/movie/{movie_id}/similar` | GET   | `useGet3MovieByMovieIdSimilarQuery`    |
| `/movie/{movie_id}/rating`  | POST  | `usePost3MovieByMovieIdRatingMutation` |

Зная путь эндпоинта из документации TMDB, можно почти всегда угадать имя хука,
не заглядывая в файл.

## GET-запросы (query-хуки) — то, что нужно для этого задания

Самое сложное — не поиск по файлу, а перевод задачи на английский словарь
именно TMDB, который иногда расходится с бытовым языком (отмечено ⚠️).

| Нужно по заданию                               | Ключевое слово TMDB                         | Хук                                 |
| ---------------------------------------------- | ------------------------------------------- | ----------------------------------- |
| Популярные фильмы                              | `popular`                                   | `useGet3MoviePopularQuery`          |
| Топ рейтинга                                   | `top_rated`                                 | `useGet3MovieTopRatedQuery`         |
| Скоро выйдут                                   | `upcoming`                                  | `useGet3MovieUpcomingQuery`         |
| Сейчас в кино                                  | `now_playing`                               | `useGet3MovieNowPlayingQuery`       |
| Поиск по названию                              | `search`                                    | `useGet3SearchMovieQuery`           |
| Фильтрация/сортировка (жанр, рейтинг, sort_by) | **`discover`** ⚠️ (не "filter")             | `useGet3DiscoverMovieQuery`         |
| Список жанров (кнопки-фильтры)                 | `genre`                                     | `useGet3GenreMovieListQuery`        |
| Детальная страница фильма                      | нет отдельного слова — просто `/movie/{id}` | `useGet3MovieByMovieIdQuery`        |
| Актёры / "в главных ролях"                     | **`credits`** ⚠️ (не "actors"/"cast")       | `useGet3MovieByMovieIdCreditsQuery` |
| Похожие фильмы                                 | `similar`                                   | `useGet3MovieByMovieIdSimilarQuery` |
| Избранное                                      | — не эндпоинт TMDB, это `localStorage`      | —                                   |

### Как вызывать query-хук

```tsx
const { data, isLoading, isError } = useGet3MoviePopularQuery({});

if (isLoading) return <p>Загрузка...</p>;
if (isError) return <p>Ошибка загрузки</p>;

return (
    <ul>
        {data?.results?.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
);
```

Запрос уходит сам при монтировании компонента, результат кэшируется — вручную
`useEffect`/`useState` не нужны.

⚠️ Не у всех хуков аргумент можно передать пустым `{}` — например, у поиска
(`useGet3SearchMovieQuery`) поле `query` обязательное. Какие поля обязательны,
а какие нет — видно прямо в типе `Get3...ApiArg` в сгенерированном файле (не
знак `?` после имени поля — значит обязательное).

## POST/DELETE-запросы (мутации)

Это другой вид хуков — `use...Mutation` вместо `use...Query`. Главное отличие:
query-хук стреляет запросом сам при рендере, а mutation-хук ничего не делает,
пока вы явно не вызовете возвращённую функцию (обычно по клику):

```tsx
const [addRating, { isLoading }] = usePost3MovieByMovieIdRatingMutation();

function handleRate(movieId: number, value: number) {
    addRating({
        movieId,
        'Content-Type': 'application/json',
        body: { RAW_BODY: JSON.stringify({ value }) },
    });
}
```

⚠️ Обратите внимание на `body: { RAW_BODY: string }` — из-за того, как схема
TMDB описывает этот конкретный эндпоинт, кодоген не смог сгенерировать
типизированное тело запроса и упал на «сырую» JSON-строку. Так бывает не у
всех мутаций — тип аргумента (`Post3MovieByMovieIdRatingApiArg` и т.п.) всегда
можно посмотреть прямо в `generated/tmdbApi.ts`, не гадая.

### Что есть в сгенерированном клиенте

| Путь                                                      | Хук                                                                               |
| --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `POST /account/{account_id}/favorite`                     | `usePost3AccountByAccountIdFavoriteMutation`                                      |
| `POST /account/{account_id}/watchlist`                    | `usePost3AccountByAccountIdWatchlistMutation`                                     |
| `POST /authentication/session/new`                        | `usePost3AuthenticationSessionNewMutation`                                        |
| `POST /authentication/token/validate_with_login`          | `usePost3AuthenticationTokenValidateWithLoginMutation`                            |
| `DELETE /authentication/session`                          | `useDelete3AuthenticationSessionMutation`                                         |
| `POST /list` / `DELETE /list/{list_id}`                   | `usePost3ListMutation` / `useDelete3ListByListIdMutation`                         |
| `POST /list/{list_id}/add_item` / `remove_item` / `clear` | `usePost3ListByListIdAddItemMutation` и т.д.                                      |
| `POST /movie/{movie_id}/rating` / `DELETE ...`            | `usePost3MovieByMovieIdRatingMutation` / `useDelete3MovieByMovieIdRatingMutation` |
| `POST /tv/{series_id}/rating` / эпизоды                   | аналогично, `Tv`/`TvBySeriesIdSeason...Episode...Rating`                          |

⚠️ **Для этого задания ни одна из мутаций не нужна.** Все они требуют
авторизованной TMDB-сессии аккаунта (не то же самое, что ваш `AUTH_TOKEN` для
чтения). "Избранное" по заданию хранится в `localStorage`, а не через TMDB
account API — так что этот раздел скорее "для общего понимания", чем то, что
реально пригодится здесь.

## Совет

Не изучайте все эндпоинты заранее — ищите конкретно под задачу, которую сейчас
делаете: сформулировали, что нужно → нашли английское слово в таблице выше или
в документации TMDB → нашли хук по такому же слову в `generated/tmdbApi.ts`.
