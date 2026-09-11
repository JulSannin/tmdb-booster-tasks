import { baseApi as api } from '../baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    get3Authentication: build.query<
      Get3AuthenticationApiResponse,
      Get3AuthenticationApiArg
    >({
      query: () => ({ url: `/3/authentication` }),
    }),
    get3AccountByAccountId: build.query<
      Get3AccountByAccountIdApiResponse,
      Get3AccountByAccountIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}`,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    post3AccountByAccountIdFavorite: build.mutation<
      Post3AccountByAccountIdFavoriteApiResponse,
      Post3AccountByAccountIdFavoriteApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/favorite`,
        method: 'POST',
        body: queryArg.body,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    post3AccountByAccountIdWatchlist: build.mutation<
      Post3AccountByAccountIdWatchlistApiResponse,
      Post3AccountByAccountIdWatchlistApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/watchlist`,
        method: 'POST',
        body: queryArg.body,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3AccountByAccountIdFavoriteMovies: build.query<
      Get3AccountByAccountIdFavoriteMoviesApiResponse,
      Get3AccountByAccountIdFavoriteMoviesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/favorite/movies`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdFavoriteTv: build.query<
      Get3AccountByAccountIdFavoriteTvApiResponse,
      Get3AccountByAccountIdFavoriteTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/favorite/tv`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdLists: build.query<
      Get3AccountByAccountIdListsApiResponse,
      Get3AccountByAccountIdListsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/lists`,
        params: {
          page: queryArg.page,
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3AccountByAccountIdRatedMovies: build.query<
      Get3AccountByAccountIdRatedMoviesApiResponse,
      Get3AccountByAccountIdRatedMoviesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/rated/movies`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdRatedTv: build.query<
      Get3AccountByAccountIdRatedTvApiResponse,
      Get3AccountByAccountIdRatedTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/rated/tv`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdRatedTvEpisodes: build.query<
      Get3AccountByAccountIdRatedTvEpisodesApiResponse,
      Get3AccountByAccountIdRatedTvEpisodesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/rated/tv/episodes`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdWatchlistMovies: build.query<
      Get3AccountByAccountIdWatchlistMoviesApiResponse,
      Get3AccountByAccountIdWatchlistMoviesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/watchlist/movies`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AccountByAccountIdWatchlistTv: build.query<
      Get3AccountByAccountIdWatchlistTvApiResponse,
      Get3AccountByAccountIdWatchlistTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/account/${queryArg.accountId}/watchlist/tv`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          session_id: queryArg.sessionId,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3AuthenticationGuestSessionNew: build.query<
      Get3AuthenticationGuestSessionNewApiResponse,
      Get3AuthenticationGuestSessionNewApiArg
    >({
      query: () => ({ url: `/3/authentication/guest_session/new` }),
    }),
    get3AuthenticationTokenNew: build.query<
      Get3AuthenticationTokenNewApiResponse,
      Get3AuthenticationTokenNewApiArg
    >({
      query: () => ({ url: `/3/authentication/token/new` }),
    }),
    post3AuthenticationSessionNew: build.mutation<
      Post3AuthenticationSessionNewApiResponse,
      Post3AuthenticationSessionNewApiArg
    >({
      query: (queryArg) => ({
        url: `/3/authentication/session/new`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    post3AuthenticationSessionConvert4: build.mutation<
      Post3AuthenticationSessionConvert4ApiResponse,
      Post3AuthenticationSessionConvert4ApiArg
    >({
      query: (queryArg) => ({
        url: `/3/authentication/session/convert/4`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    post3AuthenticationTokenValidateWithLogin: build.mutation<
      Post3AuthenticationTokenValidateWithLoginApiResponse,
      Post3AuthenticationTokenValidateWithLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/3/authentication/token/validate_with_login`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    delete3AuthenticationSession: build.mutation<
      Delete3AuthenticationSessionApiResponse,
      Delete3AuthenticationSessionApiArg
    >({
      query: (queryArg) => ({
        url: `/3/authentication/session`,
        method: 'DELETE',
        body: queryArg.body,
      }),
    }),
    get3CertificationMovieList: build.query<
      Get3CertificationMovieListApiResponse,
      Get3CertificationMovieListApiArg
    >({
      query: () => ({ url: `/3/certification/movie/list` }),
    }),
    get3CertificationTvList: build.query<
      Get3CertificationTvListApiResponse,
      Get3CertificationTvListApiArg
    >({
      query: () => ({ url: `/3/certification/tv/list` }),
    }),
    get3MovieChanges: build.query<
      Get3MovieChangesApiResponse,
      Get3MovieChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3PersonChanges: build.query<
      Get3PersonChangesApiResponse,
      Get3PersonChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3TvChanges: build.query<Get3TvChangesApiResponse, Get3TvChangesApiArg>({
      query: (queryArg) => ({
        url: `/3/tv/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3CollectionByCollectionId: build.query<
      Get3CollectionByCollectionIdApiResponse,
      Get3CollectionByCollectionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/collection/${queryArg.collectionId}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3CollectionByCollectionIdImages: build.query<
      Get3CollectionByCollectionIdImagesApiResponse,
      Get3CollectionByCollectionIdImagesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/collection/${queryArg.collectionId}/images`,
        params: {
          include_image_language: queryArg.includeImageLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3CollectionByCollectionIdTranslations: build.query<
      Get3CollectionByCollectionIdTranslationsApiResponse,
      Get3CollectionByCollectionIdTranslationsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/collection/${queryArg.collectionId}/translations`,
      }),
    }),
    get3CompanyByCompanyId: build.query<
      Get3CompanyByCompanyIdApiResponse,
      Get3CompanyByCompanyIdApiArg
    >({
      query: (queryArg) => ({ url: `/3/company/${queryArg.companyId}` }),
    }),
    get3CompanyByCompanyIdAlternativeNames: build.query<
      Get3CompanyByCompanyIdAlternativeNamesApiResponse,
      Get3CompanyByCompanyIdAlternativeNamesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/company/${queryArg.companyId}/alternative_names`,
      }),
    }),
    get3CompanyByCompanyIdImages: build.query<
      Get3CompanyByCompanyIdImagesApiResponse,
      Get3CompanyByCompanyIdImagesApiArg
    >({
      query: (queryArg) => ({ url: `/3/company/${queryArg.companyId}/images` }),
    }),
    get3Configuration: build.query<
      Get3ConfigurationApiResponse,
      Get3ConfigurationApiArg
    >({
      query: () => ({ url: `/3/configuration` }),
    }),
    get3ConfigurationCountries: build.query<
      Get3ConfigurationCountriesApiResponse,
      Get3ConfigurationCountriesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/configuration/countries`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3ConfigurationJobs: build.query<
      Get3ConfigurationJobsApiResponse,
      Get3ConfigurationJobsApiArg
    >({
      query: () => ({ url: `/3/configuration/jobs` }),
    }),
    get3ConfigurationLanguages: build.query<
      Get3ConfigurationLanguagesApiResponse,
      Get3ConfigurationLanguagesApiArg
    >({
      query: () => ({ url: `/3/configuration/languages` }),
    }),
    get3ConfigurationPrimaryTranslations: build.query<
      Get3ConfigurationPrimaryTranslationsApiResponse,
      Get3ConfigurationPrimaryTranslationsApiArg
    >({
      query: () => ({ url: `/3/configuration/primary_translations` }),
    }),
    get3ConfigurationTimezones: build.query<
      Get3ConfigurationTimezonesApiResponse,
      Get3ConfigurationTimezonesApiArg
    >({
      query: () => ({ url: `/3/configuration/timezones` }),
    }),
    get3CreditByCreditId: build.query<
      Get3CreditByCreditIdApiResponse,
      Get3CreditByCreditIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/credit/${queryArg.creditId}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3DiscoverMovie: build.query<
      Get3DiscoverMovieApiResponse,
      Get3DiscoverMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/3/discover/movie`,
        params: {
          certification: queryArg.certification,
          'certification.gte': queryArg['certification.gte'],
          'certification.lte': queryArg['certification.lte'],
          certification_country: queryArg.certificationCountry,
          include_adult: queryArg.includeAdult,
          include_video: queryArg.includeVideo,
          language: queryArg.language,
          page: queryArg.page,
          primary_release_year: queryArg.primaryReleaseYear,
          'primary_release_date.gte': queryArg['primary_release_date.gte'],
          'primary_release_date.lte': queryArg['primary_release_date.lte'],
          region: queryArg.region,
          'release_date.gte': queryArg['release_date.gte'],
          'release_date.lte': queryArg['release_date.lte'],
          sort_by: queryArg.sortBy,
          'vote_average.gte': queryArg['vote_average.gte'],
          'vote_average.lte': queryArg['vote_average.lte'],
          'vote_count.gte': queryArg['vote_count.gte'],
          'vote_count.lte': queryArg['vote_count.lte'],
          watch_region: queryArg.watchRegion,
          with_cast: queryArg.withCast,
          with_companies: queryArg.withCompanies,
          with_crew: queryArg.withCrew,
          with_genres: queryArg.withGenres,
          with_keywords: queryArg.withKeywords,
          with_origin_country: queryArg.withOriginCountry,
          with_original_language: queryArg.withOriginalLanguage,
          with_people: queryArg.withPeople,
          with_release_type: queryArg.withReleaseType,
          'with_runtime.gte': queryArg['with_runtime.gte'],
          'with_runtime.lte': queryArg['with_runtime.lte'],
          with_watch_monetization_types: queryArg.withWatchMonetizationTypes,
          with_watch_providers: queryArg.withWatchProviders,
          without_companies: queryArg.withoutCompanies,
          without_genres: queryArg.withoutGenres,
          without_keywords: queryArg.withoutKeywords,
          without_watch_providers: queryArg.withoutWatchProviders,
          year: queryArg.year,
        },
      }),
    }),
    get3DiscoverTv: build.query<
      Get3DiscoverTvApiResponse,
      Get3DiscoverTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/discover/tv`,
        params: {
          'air_date.gte': queryArg['air_date.gte'],
          'air_date.lte': queryArg['air_date.lte'],
          first_air_date_year: queryArg.firstAirDateYear,
          'first_air_date.gte': queryArg['first_air_date.gte'],
          'first_air_date.lte': queryArg['first_air_date.lte'],
          include_adult: queryArg.includeAdult,
          include_null_first_air_dates: queryArg.includeNullFirstAirDates,
          language: queryArg.language,
          page: queryArg.page,
          screened_theatrically: queryArg.screenedTheatrically,
          sort_by: queryArg.sortBy,
          timezone: queryArg.timezone,
          'vote_average.gte': queryArg['vote_average.gte'],
          'vote_average.lte': queryArg['vote_average.lte'],
          'vote_count.gte': queryArg['vote_count.gte'],
          'vote_count.lte': queryArg['vote_count.lte'],
          watch_region: queryArg.watchRegion,
          with_companies: queryArg.withCompanies,
          with_genres: queryArg.withGenres,
          with_keywords: queryArg.withKeywords,
          with_networks: queryArg.withNetworks,
          with_origin_country: queryArg.withOriginCountry,
          with_original_language: queryArg.withOriginalLanguage,
          'with_runtime.gte': queryArg['with_runtime.gte'],
          'with_runtime.lte': queryArg['with_runtime.lte'],
          with_status: queryArg.withStatus,
          with_watch_monetization_types: queryArg.withWatchMonetizationTypes,
          with_watch_providers: queryArg.withWatchProviders,
          without_companies: queryArg.withoutCompanies,
          without_genres: queryArg.withoutGenres,
          without_keywords: queryArg.withoutKeywords,
          without_watch_providers: queryArg.withoutWatchProviders,
          with_type: queryArg.withType,
        },
      }),
    }),
    get3FindByExternalId: build.query<
      Get3FindByExternalIdApiResponse,
      Get3FindByExternalIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/find/${queryArg.externalId}`,
        params: {
          external_source: queryArg.externalSource,
          language: queryArg.language,
        },
      }),
    }),
    get3GenreMovieList: build.query<
      Get3GenreMovieListApiResponse,
      Get3GenreMovieListApiArg
    >({
      query: (queryArg) => ({
        url: `/3/genre/movie/list`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3GenreTvList: build.query<
      Get3GenreTvListApiResponse,
      Get3GenreTvListApiArg
    >({
      query: (queryArg) => ({
        url: `/3/genre/tv/list`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3GuestSessionByGuestSessionIdRatedMovies: build.query<
      Get3GuestSessionByGuestSessionIdRatedMoviesApiResponse,
      Get3GuestSessionByGuestSessionIdRatedMoviesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/guest_session/${queryArg.guestSessionId}/rated/movies`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3GuestSessionByGuestSessionIdRatedTv: build.query<
      Get3GuestSessionByGuestSessionIdRatedTvApiResponse,
      Get3GuestSessionByGuestSessionIdRatedTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/guest_session/${queryArg.guestSessionId}/rated/tv`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3GuestSessionByGuestSessionIdRatedTvEpisodes: build.query<
      Get3GuestSessionByGuestSessionIdRatedTvEpisodesApiResponse,
      Get3GuestSessionByGuestSessionIdRatedTvEpisodesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/guest_session/${queryArg.guestSessionId}/rated/tv/episodes`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          sort_by: queryArg.sortBy,
        },
      }),
    }),
    get3KeywordByKeywordId: build.query<
      Get3KeywordByKeywordIdApiResponse,
      Get3KeywordByKeywordIdApiArg
    >({
      query: (queryArg) => ({ url: `/3/keyword/${queryArg.keywordId}` }),
    }),
    get3KeywordByKeywordIdMovies: build.query<
      Get3KeywordByKeywordIdMoviesApiResponse,
      Get3KeywordByKeywordIdMoviesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/keyword/${queryArg.keywordId}/movies`,
        params: {
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    post3ListByListIdAddItem: build.mutation<
      Post3ListByListIdAddItemApiResponse,
      Post3ListByListIdAddItemApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}/add_item`,
        method: 'POST',
        body: queryArg.body,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3ListByListIdItemStatus: build.query<
      Get3ListByListIdItemStatusApiResponse,
      Get3ListByListIdItemStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}/item_status`,
        params: {
          language: queryArg.language,
          movie_id: queryArg.movieId,
        },
      }),
    }),
    post3ListByListIdClear: build.mutation<
      Post3ListByListIdClearApiResponse,
      Post3ListByListIdClearApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}/clear`,
        method: 'POST',
        params: {
          session_id: queryArg.sessionId,
          confirm: queryArg.confirm,
        },
      }),
    }),
    post3List: build.mutation<Post3ListApiResponse, Post3ListApiArg>({
      query: (queryArg) => ({
        url: `/3/list`,
        method: 'POST',
        body: queryArg.body,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    delete3ListByListId: build.mutation<
      Delete3ListByListIdApiResponse,
      Delete3ListByListIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}`,
        method: 'DELETE',
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3ListByListId: build.query<
      Get3ListByListIdApiResponse,
      Get3ListByListIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    post3ListByListIdRemoveItem: build.mutation<
      Post3ListByListIdRemoveItemApiResponse,
      Post3ListByListIdRemoveItemApiArg
    >({
      query: (queryArg) => ({
        url: `/3/list/${queryArg.listId}/remove_item`,
        method: 'POST',
        body: queryArg.body,
        params: {
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3MovieNowPlaying: build.query<
      Get3MovieNowPlayingApiResponse,
      Get3MovieNowPlayingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/now_playing`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          region: queryArg.region,
        },
      }),
    }),
    get3MoviePopular: build.query<
      Get3MoviePopularApiResponse,
      Get3MoviePopularApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/popular`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          region: queryArg.region,
        },
      }),
    }),
    get3MovieTopRated: build.query<
      Get3MovieTopRatedApiResponse,
      Get3MovieTopRatedApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/top_rated`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          region: queryArg.region,
        },
      }),
    }),
    get3MovieUpcoming: build.query<
      Get3MovieUpcomingApiResponse,
      Get3MovieUpcomingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/upcoming`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          region: queryArg.region,
        },
      }),
    }),
    get3MovieByMovieId: build.query<
      Get3MovieByMovieIdApiResponse,
      Get3MovieByMovieIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}`,
        params: {
          append_to_response: queryArg.appendToResponse,
          language: queryArg.language,
        },
      }),
    }),
    get3MovieByMovieIdAccountStates: build.query<
      Get3MovieByMovieIdAccountStatesApiResponse,
      Get3MovieByMovieIdAccountStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/account_states`,
        params: {
          session_id: queryArg.sessionId,
          guest_session_id: queryArg.guestSessionId,
        },
      }),
    }),
    get3MovieByMovieIdAlternativeTitles: build.query<
      Get3MovieByMovieIdAlternativeTitlesApiResponse,
      Get3MovieByMovieIdAlternativeTitlesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/alternative_titles`,
        params: {
          country: queryArg.country,
        },
      }),
    }),
    get3MovieByMovieIdChanges: build.query<
      Get3MovieByMovieIdChangesApiResponse,
      Get3MovieByMovieIdChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3MovieByMovieIdCredits: build.query<
      Get3MovieByMovieIdCreditsApiResponse,
      Get3MovieByMovieIdCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3MovieByMovieIdExternalIds: build.query<
      Get3MovieByMovieIdExternalIdsApiResponse,
      Get3MovieByMovieIdExternalIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/external_ids`,
      }),
    }),
    get3MovieByMovieIdImages: build.query<
      Get3MovieByMovieIdImagesApiResponse,
      Get3MovieByMovieIdImagesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/images`,
        params: {
          include_image_language: queryArg.includeImageLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3MovieByMovieIdKeywords: build.query<
      Get3MovieByMovieIdKeywordsApiResponse,
      Get3MovieByMovieIdKeywordsApiArg
    >({
      query: (queryArg) => ({ url: `/3/movie/${queryArg.movieId}/keywords` }),
    }),
    get3MovieLatest: build.query<
      Get3MovieLatestApiResponse,
      Get3MovieLatestApiArg
    >({
      query: () => ({ url: `/3/movie/latest` }),
    }),
    get3MovieByMovieIdLists: build.query<
      Get3MovieByMovieIdListsApiResponse,
      Get3MovieByMovieIdListsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/lists`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3MovieByMovieIdRecommendations: build.query<
      Get3MovieByMovieIdRecommendationsApiResponse,
      Get3MovieByMovieIdRecommendationsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/recommendations`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3MovieByMovieIdReleaseDates: build.query<
      Get3MovieByMovieIdReleaseDatesApiResponse,
      Get3MovieByMovieIdReleaseDatesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/release_dates`,
      }),
    }),
    get3MovieByMovieIdReviews: build.query<
      Get3MovieByMovieIdReviewsApiResponse,
      Get3MovieByMovieIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/reviews`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3MovieByMovieIdSimilar: build.query<
      Get3MovieByMovieIdSimilarApiResponse,
      Get3MovieByMovieIdSimilarApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/similar`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3MovieByMovieIdTranslations: build.query<
      Get3MovieByMovieIdTranslationsApiResponse,
      Get3MovieByMovieIdTranslationsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/translations`,
      }),
    }),
    get3MovieByMovieIdVideos: build.query<
      Get3MovieByMovieIdVideosApiResponse,
      Get3MovieByMovieIdVideosApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/videos`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3MovieByMovieIdWatchProviders: build.query<
      Get3MovieByMovieIdWatchProvidersApiResponse,
      Get3MovieByMovieIdWatchProvidersApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/watch/providers`,
      }),
    }),
    post3MovieByMovieIdRating: build.mutation<
      Post3MovieByMovieIdRatingApiResponse,
      Post3MovieByMovieIdRatingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/rating`,
        method: 'POST',
        body: queryArg.body,
        headers: {
          'Content-Type': queryArg['Content-Type'],
        },
        params: {
          guest_session_id: queryArg.guestSessionId,
          session_id: queryArg.sessionId,
        },
      }),
    }),
    delete3MovieByMovieIdRating: build.mutation<
      Delete3MovieByMovieIdRatingApiResponse,
      Delete3MovieByMovieIdRatingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/movie/${queryArg.movieId}/rating`,
        method: 'DELETE',
        headers: {
          'Content-Type': queryArg['Content-Type'],
        },
        params: {
          guest_session_id: queryArg.guestSessionId,
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3NetworkByNetworkId: build.query<
      Get3NetworkByNetworkIdApiResponse,
      Get3NetworkByNetworkIdApiArg
    >({
      query: (queryArg) => ({ url: `/3/network/${queryArg.networkId}` }),
    }),
    get3NetworkByNetworkIdAlternativeNames: build.query<
      Get3NetworkByNetworkIdAlternativeNamesApiResponse,
      Get3NetworkByNetworkIdAlternativeNamesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/network/${queryArg.networkId}/alternative_names`,
      }),
    }),
    get3NetworkByNetworkIdImages: build.query<
      Get3NetworkByNetworkIdImagesApiResponse,
      Get3NetworkByNetworkIdImagesApiArg
    >({
      query: (queryArg) => ({ url: `/3/network/${queryArg.networkId}/images` }),
    }),
    get3PersonPopular: build.query<
      Get3PersonPopularApiResponse,
      Get3PersonPopularApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/popular`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3PersonByPersonId: build.query<
      Get3PersonByPersonIdApiResponse,
      Get3PersonByPersonIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}`,
        params: {
          append_to_response: queryArg.appendToResponse,
          language: queryArg.language,
        },
      }),
    }),
    get3PersonByPersonIdChanges: build.query<
      Get3PersonByPersonIdChangesApiResponse,
      Get3PersonByPersonIdChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3PersonByPersonIdCombinedCredits: build.query<
      Get3PersonByPersonIdCombinedCreditsApiResponse,
      Get3PersonByPersonIdCombinedCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/combined_credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3PersonByPersonIdExternalIds: build.query<
      Get3PersonByPersonIdExternalIdsApiResponse,
      Get3PersonByPersonIdExternalIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/external_ids`,
      }),
    }),
    get3PersonByPersonIdImages: build.query<
      Get3PersonByPersonIdImagesApiResponse,
      Get3PersonByPersonIdImagesApiArg
    >({
      query: (queryArg) => ({ url: `/3/person/${queryArg.personId}/images` }),
    }),
    get3PersonLatest: build.query<
      Get3PersonLatestApiResponse,
      Get3PersonLatestApiArg
    >({
      query: () => ({ url: `/3/person/latest` }),
    }),
    get3PersonByPersonIdMovieCredits: build.query<
      Get3PersonByPersonIdMovieCreditsApiResponse,
      Get3PersonByPersonIdMovieCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/movie_credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3PersonByPersonIdTvCredits: build.query<
      Get3PersonByPersonIdTvCreditsApiResponse,
      Get3PersonByPersonIdTvCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/tv_credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3PersonByPersonIdTaggedImages: build.query<
      Get3PersonByPersonIdTaggedImagesApiResponse,
      Get3PersonByPersonIdTaggedImagesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/tagged_images`,
        params: {
          page: queryArg.page,
        },
      }),
    }),
    translations: build.query<TranslationsApiResponse, TranslationsApiArg>({
      query: (queryArg) => ({
        url: `/3/person/${queryArg.personId}/translations`,
      }),
    }),
    get3ReviewByReviewId: build.query<
      Get3ReviewByReviewIdApiResponse,
      Get3ReviewByReviewIdApiArg
    >({
      query: (queryArg) => ({ url: `/3/review/${queryArg.reviewId}` }),
    }),
    get3SearchCollection: build.query<
      Get3SearchCollectionApiResponse,
      Get3SearchCollectionApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/collection`,
        params: {
          query: queryArg.query,
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          page: queryArg.page,
          region: queryArg.region,
        },
      }),
    }),
    get3SearchCompany: build.query<
      Get3SearchCompanyApiResponse,
      Get3SearchCompanyApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/company`,
        params: {
          query: queryArg.query,
          page: queryArg.page,
        },
      }),
    }),
    get3SearchKeyword: build.query<
      Get3SearchKeywordApiResponse,
      Get3SearchKeywordApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/keyword`,
        params: {
          query: queryArg.query,
          page: queryArg.page,
        },
      }),
    }),
    get3SearchMovie: build.query<
      Get3SearchMovieApiResponse,
      Get3SearchMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/movie`,
        params: {
          query: queryArg.query,
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          primary_release_year: queryArg.primaryReleaseYear,
          page: queryArg.page,
          region: queryArg.region,
          year: queryArg.year,
        },
      }),
    }),
    get3SearchMulti: build.query<
      Get3SearchMultiApiResponse,
      Get3SearchMultiApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/multi`,
        params: {
          query: queryArg.query,
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3SearchPerson: build.query<
      Get3SearchPersonApiResponse,
      Get3SearchPersonApiArg
    >({
      query: (queryArg) => ({
        url: `/3/search/person`,
        params: {
          query: queryArg.query,
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3SearchTv: build.query<Get3SearchTvApiResponse, Get3SearchTvApiArg>({
      query: (queryArg) => ({
        url: `/3/search/tv`,
        params: {
          query: queryArg.query,
          first_air_date_year: queryArg.firstAirDateYear,
          include_adult: queryArg.includeAdult,
          language: queryArg.language,
          page: queryArg.page,
          year: queryArg.year,
        },
      }),
    }),
    get3TrendingAllByTimeWindow: build.query<
      Get3TrendingAllByTimeWindowApiResponse,
      Get3TrendingAllByTimeWindowApiArg
    >({
      query: (queryArg) => ({
        url: `/3/trending/all/${queryArg.timeWindow}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TrendingMovieByTimeWindow: build.query<
      Get3TrendingMovieByTimeWindowApiResponse,
      Get3TrendingMovieByTimeWindowApiArg
    >({
      query: (queryArg) => ({
        url: `/3/trending/movie/${queryArg.timeWindow}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TrendingPersonByTimeWindow: build.query<
      Get3TrendingPersonByTimeWindowApiResponse,
      Get3TrendingPersonByTimeWindowApiArg
    >({
      query: (queryArg) => ({
        url: `/3/trending/person/${queryArg.timeWindow}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TrendingTvByTimeWindow: build.query<
      Get3TrendingTvByTimeWindowApiResponse,
      Get3TrendingTvByTimeWindowApiArg
    >({
      query: (queryArg) => ({
        url: `/3/trending/tv/${queryArg.timeWindow}`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvAiringToday: build.query<
      Get3TvAiringTodayApiResponse,
      Get3TvAiringTodayApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/airing_today`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          timezone: queryArg.timezone,
        },
      }),
    }),
    get3TvOnTheAir: build.query<
      Get3TvOnTheAirApiResponse,
      Get3TvOnTheAirApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/on_the_air`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
          timezone: queryArg.timezone,
        },
      }),
    }),
    get3TvPopular: build.query<Get3TvPopularApiResponse, Get3TvPopularApiArg>({
      query: (queryArg) => ({
        url: `/3/tv/popular`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvTopRated: build.query<
      Get3TvTopRatedApiResponse,
      Get3TvTopRatedApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/top_rated`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvBySeriesId: build.query<
      Get3TvBySeriesIdApiResponse,
      Get3TvBySeriesIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}`,
        params: {
          append_to_response: queryArg.appendToResponse,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdAccountStates: build.query<
      Get3TvBySeriesIdAccountStatesApiResponse,
      Get3TvBySeriesIdAccountStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/account_states`,
        params: {
          session_id: queryArg.sessionId,
          guest_session_id: queryArg.guestSessionId,
        },
      }),
    }),
    get3TvBySeriesIdAggregateCredits: build.query<
      Get3TvBySeriesIdAggregateCreditsApiResponse,
      Get3TvBySeriesIdAggregateCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/aggregate_credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdAlternativeTitles: build.query<
      Get3TvBySeriesIdAlternativeTitlesApiResponse,
      Get3TvBySeriesIdAlternativeTitlesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/alternative_titles`,
      }),
    }),
    get3TvBySeriesIdChanges: build.query<
      Get3TvBySeriesIdChangesApiResponse,
      Get3TvBySeriesIdChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3TvBySeriesIdContentRatings: build.query<
      Get3TvBySeriesIdContentRatingsApiResponse,
      Get3TvBySeriesIdContentRatingsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/content_ratings`,
      }),
    }),
    get3TvBySeriesIdCredits: build.query<
      Get3TvBySeriesIdCreditsApiResponse,
      Get3TvBySeriesIdCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdEpisodeGroups: build.query<
      Get3TvBySeriesIdEpisodeGroupsApiResponse,
      Get3TvBySeriesIdEpisodeGroupsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/episode_groups`,
      }),
    }),
    get3TvBySeriesIdExternalIds: build.query<
      Get3TvBySeriesIdExternalIdsApiResponse,
      Get3TvBySeriesIdExternalIdsApiArg
    >({
      query: (queryArg) => ({ url: `/3/tv/${queryArg.seriesId}/external_ids` }),
    }),
    get3TvBySeriesIdImages: build.query<
      Get3TvBySeriesIdImagesApiResponse,
      Get3TvBySeriesIdImagesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/images`,
        params: {
          include_image_language: queryArg.includeImageLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdKeywords: build.query<
      Get3TvBySeriesIdKeywordsApiResponse,
      Get3TvBySeriesIdKeywordsApiArg
    >({
      query: (queryArg) => ({ url: `/3/tv/${queryArg.seriesId}/keywords` }),
    }),
    get3TvLatest: build.query<Get3TvLatestApiResponse, Get3TvLatestApiArg>({
      query: () => ({ url: `/3/tv/latest` }),
    }),
    get3TvBySeriesIdLists: build.query<
      Get3TvBySeriesIdListsApiResponse,
      Get3TvBySeriesIdListsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/lists`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvBySeriesIdRecommendations: build.query<
      Get3TvBySeriesIdRecommendationsApiResponse,
      Get3TvBySeriesIdRecommendationsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/recommendations`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvBySeriesIdReviews: build.query<
      Get3TvBySeriesIdReviewsApiResponse,
      Get3TvBySeriesIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/reviews`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvBySeriesIdScreenedTheatrically: build.query<
      Get3TvBySeriesIdScreenedTheatricallyApiResponse,
      Get3TvBySeriesIdScreenedTheatricallyApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/screened_theatrically`,
      }),
    }),
    get3TvBySeriesIdSimilar: build.query<
      Get3TvBySeriesIdSimilarApiResponse,
      Get3TvBySeriesIdSimilarApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/similar`,
        params: {
          language: queryArg.language,
          page: queryArg.page,
        },
      }),
    }),
    get3TvBySeriesIdTranslations: build.query<
      Get3TvBySeriesIdTranslationsApiResponse,
      Get3TvBySeriesIdTranslationsApiArg
    >({
      query: (queryArg) => ({ url: `/3/tv/${queryArg.seriesId}/translations` }),
    }),
    get3TvBySeriesIdVideos: build.query<
      Get3TvBySeriesIdVideosApiResponse,
      Get3TvBySeriesIdVideosApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/videos`,
        params: {
          include_video_language: queryArg.includeVideoLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdWatchProviders: build.query<
      Get3TvBySeriesIdWatchProvidersApiResponse,
      Get3TvBySeriesIdWatchProvidersApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/watch/providers`,
      }),
    }),
    post3TvBySeriesIdRating: build.mutation<
      Post3TvBySeriesIdRatingApiResponse,
      Post3TvBySeriesIdRatingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/rating`,
        method: 'POST',
        body: queryArg.body,
        headers: {
          'Content-Type': queryArg['Content-Type'],
        },
        params: {
          guest_session_id: queryArg.guestSessionId,
          session_id: queryArg.sessionId,
        },
      }),
    }),
    delete3TvBySeriesIdRating: build.mutation<
      Delete3TvBySeriesIdRatingApiResponse,
      Delete3TvBySeriesIdRatingApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/rating`,
        method: 'DELETE',
        headers: {
          'Content-Type': queryArg['Content-Type'],
        },
        params: {
          guest_session_id: queryArg.guestSessionId,
          session_id: queryArg.sessionId,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumber: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}`,
        params: {
          append_to_response: queryArg.appendToResponse,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberAccountStates: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberAccountStatesApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberAccountStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/account_states`,
        params: {
          session_id: queryArg.sessionId,
          guest_session_id: queryArg.guestSessionId,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberAggregateCredits: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberAggregateCreditsApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberAggregateCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/aggregate_credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvSeasonBySeasonIdChanges: build.query<
      Get3TvSeasonBySeasonIdChangesApiResponse,
      Get3TvSeasonBySeasonIdChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/season/${queryArg.seasonId}/changes`,
        params: {
          end_date: queryArg.endDate,
          page: queryArg.page,
          start_date: queryArg.startDate,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberCredits: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberCreditsApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberCreditsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/credits`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberExternalIds: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberExternalIdsApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberExternalIdsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/external_ids`,
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberImages: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberImagesApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberImagesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/images`,
        params: {
          include_image_language: queryArg.includeImageLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberTranslations: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberTranslationsApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberTranslationsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/translations`,
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberVideos: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberVideosApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberVideosApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/videos`,
        params: {
          include_video_language: queryArg.includeVideoLanguage,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberWatchProviders: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberWatchProvidersApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberWatchProvidersApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/watch/providers`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumber: build.query<
      Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberApiResponse,
      Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}`,
        params: {
          append_to_response: queryArg.appendToResponse,
          language: queryArg.language,
        },
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStates:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStatesApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStatesApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/account_states`,
          params: {
            session_id: queryArg.sessionId,
            guest_session_id: queryArg.guestSessionId,
          },
        }),
      }),
    get3TvEpisodeByEpisodeIdChanges: build.query<
      Get3TvEpisodeByEpisodeIdChangesApiResponse,
      Get3TvEpisodeByEpisodeIdChangesApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/episode/${queryArg.episodeId}/changes`,
      }),
    }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCredits:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCreditsApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCreditsApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/credits`,
          params: {
            language: queryArg.language,
          },
        }),
      }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIds:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIdsApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIdsApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/external_ids`,
        }),
      }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImages:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImagesApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImagesApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/images`,
          params: {
            include_image_language: queryArg.includeImageLanguage,
            language: queryArg.language,
          },
        }),
      }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslations:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslationsApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslationsApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/translations`,
        }),
      }),
    get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideos:
      build.query<
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideosApiResponse,
        Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideosApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/videos`,
          params: {
            include_video_language: queryArg.includeVideoLanguage,
            language: queryArg.language,
          },
        }),
      }),
    post3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRating:
      build.mutation<
        Post3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiResponse,
        Post3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/rating`,
          method: 'POST',
          body: queryArg.body,
          headers: {
            'Content-Type': queryArg['Content-Type'],
          },
          params: {
            guest_session_id: queryArg.guestSessionId,
            session_id: queryArg.sessionId,
          },
        }),
      }),
    delete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRating:
      build.mutation<
        Delete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiResponse,
        Delete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiArg
      >({
        query: (queryArg) => ({
          url: `/3/tv/${queryArg.seriesId}/season/${queryArg.seasonNumber}/episode/${queryArg.episodeNumber}/rating`,
          method: 'DELETE',
          headers: {
            'Content-Type': queryArg['Content-Type'],
          },
          params: {
            guest_session_id: queryArg.guestSessionId,
            session_id: queryArg.sessionId,
          },
        }),
      }),
    get3TvEpisodeGroupByTvEpisodeGroupId: build.query<
      Get3TvEpisodeGroupByTvEpisodeGroupIdApiResponse,
      Get3TvEpisodeGroupByTvEpisodeGroupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/3/tv/episode_group/${queryArg.tvEpisodeGroupId}`,
      }),
    }),
    get3WatchProvidersRegions: build.query<
      Get3WatchProvidersRegionsApiResponse,
      Get3WatchProvidersRegionsApiArg
    >({
      query: (queryArg) => ({
        url: `/3/watch/providers/regions`,
        params: {
          language: queryArg.language,
        },
      }),
    }),
    get3WatchProvidersMovie: build.query<
      Get3WatchProvidersMovieApiResponse,
      Get3WatchProvidersMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/3/watch/providers/movie`,
        params: {
          language: queryArg.language,
          watch_region: queryArg.watchRegion,
        },
      }),
    }),
    get3WatchProvidersTv: build.query<
      Get3WatchProvidersTvApiResponse,
      Get3WatchProvidersTvApiArg
    >({
      query: (queryArg) => ({
        url: `/3/watch/providers/tv`,
        params: {
          language: queryArg.language,
          watch_region: queryArg.watchRegion,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as tmdbApi };
export type Get3AuthenticationApiResponse = /** status 200 200 */ {
  success?: boolean;
  status_code?: number;
  status_message?: string;
};
export type Get3AuthenticationApiArg = void;
export type Get3AccountByAccountIdApiResponse = /** status 200 200 */ {
  avatar?: {
    gravatar?: {
      hash?: string;
    };
    tmdb?: {
      avatar_path?: string;
    };
  };
  id?: number;
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  include_adult?: boolean;
  username?: string;
};
export type Get3AccountByAccountIdApiArg = {
  accountId: number;
  sessionId?: string;
};
export type Post3AccountByAccountIdFavoriteApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3AccountByAccountIdFavoriteApiArg = {
  accountId: number;
  sessionId?: string;
  body: {
    RAW_BODY: string;
  };
};
export type Post3AccountByAccountIdWatchlistApiResponse =
  /** status 200 200 */ {
    status_code?: number;
    status_message?: string;
  };
export type Post3AccountByAccountIdWatchlistApiArg = {
  accountId: number;
  sessionId?: string;
  body: {
    RAW_BODY: string;
  };
};
export type Get3AccountByAccountIdFavoriteMoviesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdFavoriteMoviesApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdFavoriteTvApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      origin_country?: string[];
      original_language?: string;
      original_name?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      first_air_date?: string;
      name?: string;
      vote_average?: number;
      vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdFavoriteTvApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdListsApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    description?: string;
    favorite_count?: number;
    id?: number;
    item_count?: number;
    iso_639_1?: string;
    list_type?: string;
    name?: string;
    poster_path?: any;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3AccountByAccountIdListsApiArg = {
  accountId: number;
  page?: number;
  sessionId?: string;
};
export type Get3AccountByAccountIdRatedMoviesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      rating?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdRatedMoviesApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdRatedTvApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?: number;
    rating?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3AccountByAccountIdRatedTvApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdRatedTvEpisodesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      air_date?: string;
      episode_number?: number;
      id?: number;
      name?: string;
      overview?: string;
      production_code?: string;
      runtime?: number;
      season_number?: number;
      show_id?: number;
      still_path?: string;
      vote_average?: number;
      vote_count?: number;
      rating?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdRatedTvEpisodesApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdWatchlistMoviesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdWatchlistMoviesApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AccountByAccountIdWatchlistTvApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      origin_country?: string[];
      original_language?: string;
      original_name?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      first_air_date?: string;
      name?: string;
      vote_average?: number;
      vote_count?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3AccountByAccountIdWatchlistTvApiArg = {
  accountId: number;
  language?: string;
  page?: number;
  sessionId?: string;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3AuthenticationGuestSessionNewApiResponse =
  /** status 200 200 */ {
    success?: boolean;
    guest_session_id?: string;
    expires_at?: string;
  };
export type Get3AuthenticationGuestSessionNewApiArg = void;
export type Get3AuthenticationTokenNewApiResponse = /** status 200 200 */ {
  success?: boolean;
  expires_at?: string;
  request_token?: string;
};
export type Get3AuthenticationTokenNewApiArg = void;
export type Post3AuthenticationSessionNewApiResponse = /** status 200 200 */ {
  success?: boolean;
  session_id?: string;
};
export type Post3AuthenticationSessionNewApiArg = {
  body: {
    RAW_BODY: string;
  };
};
export type Post3AuthenticationSessionConvert4ApiResponse =
  /** status 200 200 */ {
    success?: boolean;
    session_id?: string;
  };
export type Post3AuthenticationSessionConvert4ApiArg = {
  body: {
    RAW_BODY: string;
  };
};
export type Post3AuthenticationTokenValidateWithLoginApiResponse =
  /** status 200 200 */ {
    success?: boolean;
    expires_at?: string;
    request_token?: string;
  };
export type Post3AuthenticationTokenValidateWithLoginApiArg = {
  body: {
    RAW_BODY: string;
  };
};
export type Delete3AuthenticationSessionApiResponse = /** status 200 200 */ {
  success?: boolean;
};
export type Delete3AuthenticationSessionApiArg = {
  body: {
    RAW_BODY: string;
  };
};
export type Get3CertificationMovieListApiResponse = /** status 200 200 */ {
  certifications?: {
    AU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    BG?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    BR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    CA?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    'CA-QC'?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    DE?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    DK?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ES?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    FI?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    FR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    GB?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    HU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IN?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    LT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MY?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NL?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NO?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NZ?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PH?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    RU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SE?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    US?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    KR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SK?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TH?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MX?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ID?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    AR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    GR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TW?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ZA?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SG?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IE?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    JP?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    VI?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    CH?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IL?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    HK?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MO?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    LV?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    LU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
  };
};
export type Get3CertificationMovieListApiArg = void;
export type Get3CertificationTvListApiResponse = /** status 200 200 */ {
  certifications?: {
    AU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    BR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    CA?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    'CA-QC'?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    DE?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ES?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    FR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    GB?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    HU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    KR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    LT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NL?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PH?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    RU?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SK?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TH?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    US?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IT?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    FI?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MY?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NZ?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    NO?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    BG?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MX?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IN?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    DK?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SE?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ID?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    AR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PL?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    MA?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    GR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    IL?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    TW?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    ZA?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    SG?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    PR?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
    VI?: {
      certification?: string;
      meaning?: string;
      order?: number;
    }[];
  };
};
export type Get3CertificationTvListApiArg = void;
export type Get3MovieChangesApiResponse = /** status 200 200 */ {
  results?: {
    id?: number;
    adult?: boolean;
  }[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieChangesApiArg = {
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3PersonChangesApiResponse = /** status 200 200 */ {
  results?: {
    id?: number;
    adult?: boolean;
  }[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
export type Get3PersonChangesApiArg = {
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3TvChangesApiResponse = /** status 200 200 */ {
  results?: {
    id?: number;
    adult?: boolean;
  }[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
export type Get3TvChangesApiArg = {
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3CollectionByCollectionIdApiResponse = /** status 200 200 */ {
  id?: number;
  name?: string;
  original_language?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  parts?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    original_language?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
};
export type Get3CollectionByCollectionIdApiArg = {
  collectionId: number;
  language?: string;
};
export type Get3CollectionByCollectionIdImagesApiResponse =
  /** status 200 200 */ {
    id?: number;
    backdrops?: {
      aspect_ratio?: number;
      height?: number;
      iso_639_1?: any;
      file_path?: string;
      vote_average?: number;
      vote_count?: number;
      width?: number;
    }[];
    posters?: {
      aspect_ratio?: number;
      height?: number;
      iso_639_1?: string;
      file_path?: string;
      vote_average?: number;
      vote_count?: number;
      width?: number;
    }[];
  };
export type Get3CollectionByCollectionIdImagesApiArg = {
  collectionId: number;
  /** specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null` */
  includeImageLanguage?: string;
  language?: string;
};
export type Get3CollectionByCollectionIdTranslationsApiResponse =
  /** status 200 200 */ {
    id?: number;
    translations?: {
      iso_3166_1?: string;
      iso_639_1?: string;
      name?: string;
      english_name?: string;
      data?: {
        title?: string;
        overview?: string;
        homepage?: string;
      };
    }[];
  };
export type Get3CollectionByCollectionIdTranslationsApiArg = {
  collectionId: number;
};
export type Get3CompanyByCompanyIdApiResponse = /** status 200 200 */ {
  description?: string;
  headquarters?: string;
  homepage?: string;
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
  parent_company?: any;
};
export type Get3CompanyByCompanyIdApiArg = {
  companyId: number;
};
export type Get3CompanyByCompanyIdAlternativeNamesApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      name?: string;
      type?: string;
    }[];
  };
export type Get3CompanyByCompanyIdAlternativeNamesApiArg = {
  companyId: number;
};
export type Get3CompanyByCompanyIdImagesApiResponse = /** status 200 200 */ {
  id?: number;
  logos?: {
    aspect_ratio?: number;
    file_path?: string;
    height?: number;
    id?: string;
    file_type?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
};
export type Get3CompanyByCompanyIdImagesApiArg = {
  companyId: number;
};
export type Get3ConfigurationApiResponse = /** status 200 200 */ {
  images?: {
    base_url?: string;
    secure_base_url?: string;
    backdrop_sizes?: string[];
    logo_sizes?: string[];
    poster_sizes?: string[];
    profile_sizes?: string[];
    still_sizes?: string[];
  };
  change_keys?: string[];
};
export type Get3ConfigurationApiArg = void;
export type Get3ConfigurationCountriesApiResponse = /** status 200 200 */ {
  iso_3166_1?: string;
  english_name?: string;
  native_name?: string;
}[];
export type Get3ConfigurationCountriesApiArg = {
  language?: string;
};
export type Get3ConfigurationJobsApiResponse = /** status 200 200 */ {
  department?: string;
  jobs?: string[];
}[];
export type Get3ConfigurationJobsApiArg = void;
export type Get3ConfigurationLanguagesApiResponse = /** status 200 200 */ {
  iso_639_1?: string;
  english_name?: string;
  name?: string;
}[];
export type Get3ConfigurationLanguagesApiArg = void;
export type Get3ConfigurationPrimaryTranslationsApiResponse =
  /** status 200 200 */ string[];
export type Get3ConfigurationPrimaryTranslationsApiArg = void;
export type Get3ConfigurationTimezonesApiResponse = /** status 200 200 */ {
  iso_3166_1?: string;
  zones?: string[];
}[];
export type Get3ConfigurationTimezonesApiArg = void;
export type Get3CreditByCreditIdApiResponse = /** status 200 200 */ {
  credit_type?: string;
  department?: string;
  job?: string;
  media?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    first_air_date?: string;
    vote_average?: number;
    vote_count?: number;
    origin_country?: string[];
    character?: string;
    episodes?: any;
    seasons?: {
      air_date?: string;
      episode_count?: number;
      id?: number;
      name?: string;
      overview?: string;
      poster_path?: string;
      season_number?: number;
      show_id?: number;
    }[];
  };
  media_type?: string;
  id?: string;
  person?: {
    adult?: boolean;
    id?: number;
    name?: string;
    original_name?: string;
    media_type?: string;
    popularity?: number;
    gender?: number;
    known_for_department?: string;
    profile_path?: string;
  };
};
export type Get3CreditByCreditIdApiArg = {
  creditId: string;
  language?: string;
};
export type Get3DiscoverMovieApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3DiscoverMovieApiArg = {
  /** use in conjunction with `region` */
  certification?: string;
  /** use in conjunction with `region` */
  'certification.gte'?: string;
  /** use in conjunction with `region` */
  'certification.lte'?: string;
  /** use in conjunction with the `certification`, `certification.gte` and `certification.lte` filters */
  certificationCountry?: string;
  includeAdult?: boolean;
  includeVideo?: boolean;
  language?: string;
  page?: number;
  primaryReleaseYear?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  region?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  sortBy?:
    | 'original_title.asc'
    | 'original_title.desc'
    | 'popularity.asc'
    | 'popularity.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'title.asc'
    | 'title.desc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  /** use in conjunction with `with_watch_monetization_types ` or `with_watch_providers ` */
  watchRegion?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withCast?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withCompanies?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withCrew?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withGenres?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withKeywords?: string;
  withOriginCountry?: string;
  withOriginalLanguage?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withPeople?: string;
  /** possible values are: [1, 2, 3, 4, 5, 6] can be a comma (`AND`) or pipe (`OR`) separated query, can be used in conjunction with `region` */
  withReleaseType?: number;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  /** possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query */
  withWatchMonetizationTypes?: string;
  /** use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query */
  withWatchProviders?: string;
  withoutCompanies?: string;
  withoutGenres?: string;
  withoutKeywords?: string;
  withoutWatchProviders?: string;
  year?: number;
};
export type Get3DiscoverTvApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3DiscoverTvApiArg = {
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  firstAirDateYear?: number;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  includeAdult?: boolean;
  includeNullFirstAirDates?: boolean;
  language?: string;
  page?: number;
  screenedTheatrically?: boolean;
  sortBy?:
    | 'first_air_date.asc'
    | 'first_air_date.desc'
    | 'name.asc'
    | 'name.desc'
    | 'original_name.asc'
    | 'original_name.desc'
    | 'popularity.asc'
    | 'popularity.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
  timezone?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  /** use in conjunction with `with_watch_monetization_types ` or `with_watch_providers ` */
  watchRegion?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withCompanies?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withGenres?: string;
  /** can be a comma (`AND`) or pipe (`OR`) separated query */
  withKeywords?: string;
  withNetworks?: number;
  withOriginCountry?: string;
  withOriginalLanguage?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  /** possible values are: [0, 1, 2, 3, 4, 5], can be a comma (`AND`) or pipe (`OR`) separated query */
  withStatus?: string;
  /** possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query */
  withWatchMonetizationTypes?: string;
  /** use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query */
  withWatchProviders?: string;
  withoutCompanies?: string;
  withoutGenres?: string;
  withoutKeywords?: string;
  withoutWatchProviders?: string;
  /** possible values are: [0, 1, 2, 3, 4, 5, 6], can be a comma (`AND`) or pipe (`OR`) separated query */
  withType?: string;
};
export type Get3FindByExternalIdApiResponse = /** status 200 200 */ {
  movie_results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  person_results?: any;
  tv_results?: any;
  tv_episode_results?: any;
  tv_season_results?: any;
};
export type Get3FindByExternalIdApiArg = {
  externalId: string;
  externalSource:
    | 'imdb_id'
    | 'facebook_id'
    | 'instagram_id'
    | 'tvdb_id'
    | 'tiktok_id'
    | 'twitter_id'
    | 'wikidata_id'
    | 'youtube_id';
  language?: string;
};
export type Get3GenreMovieListApiResponse = /** status 200 200 */ {
  genres?: {
    id?: number;
    name?: string;
  }[];
};
export type Get3GenreMovieListApiArg = {
  language?: string;
};
export type Get3GenreTvListApiResponse = /** status 200 200 */ {
  genres?: {
    id?: number;
    name?: string;
  }[];
};
export type Get3GenreTvListApiArg = {
  language?: string;
};
export type Get3GuestSessionByGuestSessionIdRatedMoviesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      rating?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3GuestSessionByGuestSessionIdRatedMoviesApiArg = {
  guestSessionId: string;
  language?: string;
  page?: number;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3GuestSessionByGuestSessionIdRatedTvApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      origin_country?: string[];
      original_language?: string;
      original_name?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      first_air_date?: string;
      name?: string;
      vote_average?: number;
      vote_count?: number;
      rating?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3GuestSessionByGuestSessionIdRatedTvApiArg = {
  guestSessionId: string;
  language?: string;
  page?: number;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3GuestSessionByGuestSessionIdRatedTvEpisodesApiResponse =
  /** status 200 200 */ {
    page?: number;
    results?: {
      air_date?: string;
      episode_number?: number;
      id?: number;
      name?: string;
      overview?: string;
      production_code?: string;
      runtime?: number;
      season_number?: number;
      show_id?: number;
      still_path?: string;
      vote_average?: number;
      vote_count?: number;
      rating?: number;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3GuestSessionByGuestSessionIdRatedTvEpisodesApiArg = {
  guestSessionId: string;
  language?: string;
  page?: number;
  sortBy?: 'created_at.asc' | 'created_at.desc';
};
export type Get3KeywordByKeywordIdApiResponse = /** status 200 200 */ {
  id?: number;
  name?: string;
};
export type Get3KeywordByKeywordIdApiArg = {
  keywordId: number;
};
export type Get3KeywordByKeywordIdMoviesApiResponse = /** status 200 200 */ {
  id?: number;
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3KeywordByKeywordIdMoviesApiArg = {
  keywordId: string;
  includeAdult?: boolean;
  language?: string;
  page?: number;
};
export type Post3ListByListIdAddItemApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3ListByListIdAddItemApiArg = {
  listId: number;
  sessionId: string;
  body: {
    RAW_BODY?: string;
  };
};
export type Get3ListByListIdItemStatusApiResponse = /** status 200 200 */ {
  id?: number;
  item_present?: boolean;
};
export type Get3ListByListIdItemStatusApiArg = {
  listId: number;
  language?: string;
  movieId?: number;
};
export type Post3ListByListIdClearApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3ListByListIdClearApiArg = {
  listId: number;
  sessionId: string;
  confirm: boolean;
};
export type Post3ListApiResponse = /** status 200 200 */ {
  status_message?: string;
  success?: boolean;
  status_code?: number;
  list_id?: number;
};
export type Post3ListApiArg = {
  sessionId: string;
  body: {
    RAW_BODY: string;
  };
};
export type Delete3ListByListIdApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Delete3ListByListIdApiArg = {
  listId: number;
  sessionId: string;
};
export type Get3ListByListIdApiResponse = /** status 200 200 */ {
  created_by?: string;
  description?: string;
  favorite_count?: number;
  id?: string;
  items?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    media_type?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  item_count?: number;
  iso_639_1?: string;
  name?: string;
  poster_path?: string;
};
export type Get3ListByListIdApiArg = {
  listId: number;
  language?: string;
  page?: number;
};
export type Post3ListByListIdRemoveItemApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3ListByListIdRemoveItemApiArg = {
  listId: number;
  sessionId: string;
  body: {
    RAW_BODY: string;
  };
};
export type Get3MovieNowPlayingApiResponse = /** status 200 200 */ {
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieNowPlayingApiArg = {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
};
export type Get3MoviePopularApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MoviePopularApiArg = {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
};
export type Get3MovieTopRatedApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieTopRatedApiArg = {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
};
export type Get3MovieUpcomingApiResponse = /** status 200 200 */ {
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieUpcomingApiArg = {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
};
export type Get3MovieByMovieIdApiResponse = /** status 200 200 */ {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {
    id?: number;
    name?: string;
    poster_path?: string;
    backdrop_path?: string;
  };
  budget?: number;
  genres?: {
    id?: number;
    name?: string;
  }[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: {
    iso_3166_1?: string;
    name?: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
export type Get3MovieByMovieIdApiArg = {
  movieId: number;
  /** comma separated list of endpoints within this namespace, 20 items max */
  appendToResponse?: string;
  language?: string;
};
export type Get3MovieByMovieIdAccountStatesApiResponse = /** status 200 200 */ {
  id?: number;
  favorite?: boolean;
  rated?: {
    value?: number;
  };
  watchlist?: boolean;
};
export type Get3MovieByMovieIdAccountStatesApiArg = {
  movieId: number;
  sessionId?: string;
  guestSessionId?: string;
};
export type Get3MovieByMovieIdAlternativeTitlesApiResponse =
  /** status 200 200 */ {
    id?: number;
    titles?: {
      iso_3166_1?: string;
      title?: string;
      type?: string;
    }[];
  };
export type Get3MovieByMovieIdAlternativeTitlesApiArg = {
  movieId: number;
  /** specify a ISO-3166-1 value to filter the results */
  country?: string;
};
export type Get3MovieByMovieIdChangesApiResponse = /** status 200 200 */ {
  changes?: {
    key?: string;
    items?: {
      id?: string;
      action?: string;
      time?: string;
      iso_639_1?: string;
      iso_3166_1?: string;
      value?: {
        poster?: {
          file_path?: string;
        };
      };
    }[];
  }[];
};
export type Get3MovieByMovieIdChangesApiArg = {
  movieId: number;
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3MovieByMovieIdCreditsApiResponse = /** status 200 200 */ {
  id?: number;
  cast?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    order?: number;
  }[];
  crew?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    credit_id?: string;
    department?: string;
    job?: string;
  }[];
};
export type Get3MovieByMovieIdCreditsApiArg = {
  movieId: number;
  language?: string;
};
export type Get3MovieByMovieIdExternalIdsApiResponse = /** status 200 200 */ {
  id?: number;
  imdb_id?: string;
  wikidata_id?: any;
  facebook_id?: string;
  instagram_id?: any;
  twitter_id?: any;
};
export type Get3MovieByMovieIdExternalIdsApiArg = {
  movieId: number;
};
export type Get3MovieByMovieIdImagesApiResponse = /** status 200 200 */ {
  backdrops?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: any;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
  id?: number;
  logos?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
  posters?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
};
export type Get3MovieByMovieIdImagesApiArg = {
  movieId: number;
  /** specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null` */
  includeImageLanguage?: string;
  language?: string;
};
export type Get3MovieByMovieIdKeywordsApiResponse = /** status 200 200 */ {
  id?: number;
  keywords?: {
    id?: number;
    name?: string;
  }[];
};
export type Get3MovieByMovieIdKeywordsApiArg = {
  movieId: string;
};
export type Get3MovieLatestApiResponse = /** status 200 200 */ {
  adult?: boolean;
  backdrop_path?: any;
  belongs_to_collection?: any;
  budget?: number;
  genres?: any;
  homepage?: string;
  id?: number;
  imdb_id?: any;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: any;
  production_companies?: any;
  production_countries?: any;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: any;
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
export type Get3MovieLatestApiArg = void;
export type Get3MovieByMovieIdListsApiResponse = /** status 200 200 */ {
  id?: number;
  page?: number;
  results?: {
    description?: string;
    favorite_count?: number;
    id?: number;
    item_count?: number;
    iso_639_1?: string;
    list_type?: string;
    name?: string;
    poster_path?: any;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieByMovieIdListsApiArg = {
  movieId: number;
  language?: string;
  page?: number;
};
export type Get3MovieByMovieIdRecommendationsApiResponse =
  /** status 200 200 */ {};
export type Get3MovieByMovieIdRecommendationsApiArg = {
  movieId: number;
  language?: string;
  page?: number;
};
export type Get3MovieByMovieIdReleaseDatesApiResponse = /** status 200 200 */ {
  id?: number;
  results?: {
    iso_3166_1?: string;
    release_dates?: {
      certification?: string;
      descriptors?: any;
      iso_639_1?: string;
      note?: string;
      release_date?: string;
      type?: number;
    }[];
  }[];
};
export type Get3MovieByMovieIdReleaseDatesApiArg = {
  movieId: number;
};
export type Get3MovieByMovieIdReviewsApiResponse = /** status 200 200 */ {
  id?: number;
  page?: number;
  results?: {
    author?: string;
    author_details?: {
      name?: string;
      username?: string;
      avatar_path?: string;
      rating?: any;
    };
    content?: string;
    created_at?: string;
    id?: string;
    updated_at?: string;
    url?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieByMovieIdReviewsApiArg = {
  movieId: number;
  language?: string;
  page?: number;
};
export type Get3MovieByMovieIdSimilarApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3MovieByMovieIdSimilarApiArg = {
  movieId: number;
  language?: string;
  page?: number;
};
export type Get3MovieByMovieIdTranslationsApiResponse = /** status 200 200 */ {
  id?: number;
  translations?: {
    iso_3166_1?: string;
    iso_639_1?: string;
    name?: string;
    english_name?: string;
    data?: {
      homepage?: string;
      overview?: string;
      runtime?: number;
      tagline?: string;
      title?: string;
    };
  }[];
};
export type Get3MovieByMovieIdTranslationsApiArg = {
  movieId: number;
};
export type Get3MovieByMovieIdVideosApiResponse = /** status 200 200 */ {
  id?: number;
  results?: {
    iso_639_1?: string;
    iso_3166_1?: string;
    name?: string;
    key?: string;
    site?: string;
    size?: number;
    type?: string;
    official?: boolean;
    published_at?: string;
    id?: string;
  }[];
};
export type Get3MovieByMovieIdVideosApiArg = {
  movieId: number;
  language?: string;
};
export type Get3MovieByMovieIdWatchProvidersApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      AE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AR?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BA?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BB?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BE?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BG?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BH?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BS?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CA?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CO?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CV?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CZ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DK?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      EC?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      EE?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      EG?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ES?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        ads?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      FI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      FJ?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      FR?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GB?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GF?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HN?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HR?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        ads?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ID?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IE?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IN?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IQ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IS?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IT?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JP?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      KR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      KW?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LB?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LT?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LV?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MD?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MU?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MX?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MZ?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NO?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NZ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      OM?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PE?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PS?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PT?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      QA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RS?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RU?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SE?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SI?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SK?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SV?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TR?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TW?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      UG?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      US?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      UY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      VE?: {
        link?: string;
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      YE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ZA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
    };
  };
export type Get3MovieByMovieIdWatchProvidersApiArg = {
  movieId: number;
};
export type Post3MovieByMovieIdRatingApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3MovieByMovieIdRatingApiArg = {
  movieId: number;
  guestSessionId?: string;
  sessionId?: string;
  'Content-Type': string;
  body: {
    RAW_BODY: string;
  };
};
export type Delete3MovieByMovieIdRatingApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Delete3MovieByMovieIdRatingApiArg = {
  movieId: number;
  'Content-Type'?: string;
  guestSessionId?: string;
  sessionId?: string;
};
export type Get3NetworkByNetworkIdApiResponse = /** status 200 200 */ {
  headquarters?: string;
  homepage?: string;
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};
export type Get3NetworkByNetworkIdApiArg = {
  networkId: number;
};
export type Get3NetworkByNetworkIdAlternativeNamesApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      name?: string;
      type?: string;
    }[];
  };
export type Get3NetworkByNetworkIdAlternativeNamesApiArg = {
  networkId: number;
};
export type Get3NetworkByNetworkIdImagesApiResponse = /** status 200 200 */ {
  id?: number;
  logos?: {
    aspect_ratio?: number;
    file_path?: string;
    height?: number;
    id?: string;
    file_type?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
};
export type Get3NetworkByNetworkIdImagesApiArg = {
  networkId: number;
};
export type Get3PersonPopularApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      media_type?: string;
      original_language?: string;
      original_title?: string;
      overview?: string;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }[];
    known_for_department?: string;
    name?: string;
    popularity?: number;
    profile_path?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3PersonPopularApiArg = {
  language?: string;
  page?: number;
};
export type Get3PersonByPersonIdApiResponse = /** status 200 200 */ {
  adult?: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: any;
  gender?: number;
  homepage?: any;
  id?: number;
  imdb_id?: string;
  known_for_department?: string;
  name?: string;
  place_of_birth?: string;
  popularity?: number;
  profile_path?: string;
};
export type Get3PersonByPersonIdApiArg = {
  personId: number;
  /** comma separated list of endpoints within this namespace, 20 items max */
  appendToResponse?: string;
  language?: string;
};
export type Get3PersonByPersonIdChangesApiResponse = /** status 200 200 */ {
  changes?: {
    key?: string;
    items?: {
      id?: string;
      action?: string;
      time?: string;
      iso_639_1?: string;
      iso_3166_1?: string;
      value?: string;
    }[];
  }[];
};
export type Get3PersonByPersonIdChangesApiArg = {
  personId: number;
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3PersonByPersonIdCombinedCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      character?: string;
      credit_id?: string;
      order?: number;
      media_type?: string;
    }[];
    crew?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      credit_id?: string;
      department?: string;
      job?: string;
      media_type?: string;
    }[];
    id?: number;
  };
export type Get3PersonByPersonIdCombinedCreditsApiArg = {
  personId: string;
  language?: string;
};
export type Get3PersonByPersonIdExternalIdsApiResponse = /** status 200 200 */ {
  id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  imdb_id?: string;
  tvrage_id?: number;
  wikidata_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  tiktok_id?: string;
  twitter_id?: string;
  youtube_id?: any;
};
export type Get3PersonByPersonIdExternalIdsApiArg = {
  personId: number;
};
export type Get3PersonByPersonIdImagesApiResponse = /** status 200 200 */ {
  id?: number;
  profiles?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: any;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
};
export type Get3PersonByPersonIdImagesApiArg = {
  personId: number;
};
export type Get3PersonLatestApiResponse = /** status 200 200 */ {
  adult?: boolean;
  also_known_as?: any;
  biography?: string;
  birthday?: any;
  deathday?: any;
  gender?: number;
  homepage?: any;
  id?: number;
  imdb_id?: any;
  known_for_department?: any;
  name?: string;
  place_of_birth?: any;
  popularity?: number;
  profile_path?: any;
};
export type Get3PersonLatestApiArg = void;
export type Get3PersonByPersonIdMovieCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      character?: string;
      credit_id?: string;
      order?: number;
    }[];
    crew?: {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: number[];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
      credit_id?: string;
      department?: string;
      job?: string;
    }[];
    id?: number;
  };
export type Get3PersonByPersonIdMovieCreditsApiArg = {
  personId: number;
  language?: string;
};
export type Get3PersonByPersonIdTvCreditsApiResponse = /** status 200 200 */ {
  cast?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?: number;
    character?: string;
    credit_id?: string;
    episode_count?: number;
  }[];
  crew?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?: number;
    credit_id?: string;
    department?: string;
    episode_count?: number;
    job?: string;
  }[];
  id?: number;
};
export type Get3PersonByPersonIdTvCreditsApiArg = {
  personId: number;
  language?: string;
};
export type Get3PersonByPersonIdTaggedImagesApiResponse =
  /** status 200 200 */ {
    id?: number;
    page?: number;
    results?: {
      aspect_ratio?: number;
      file_path?: string;
      height?: number;
      id?: string;
      iso_639_1?: string;
      vote_average?: number;
      vote_count?: number;
      width?: number;
      image_type?: string;
      media?: {
        adult?: boolean;
        backdrop_path?: string;
        id?: number;
        title?: string;
        original_language?: string;
        original_title?: string;
        overview?: string;
        poster_path?: string;
        media_type?: string;
        genre_ids?: number[];
        popularity?: number;
        release_date?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
      };
      media_type?: string;
    }[];
    total_pages?: number;
    total_results?: number;
  };
export type Get3PersonByPersonIdTaggedImagesApiArg = {
  personId: number;
  page?: number;
};
export type TranslationsApiResponse = /** status 200 200 */ {
  id?: number;
  translations?: {
    iso_3166_1?: string;
    iso_639_1?: string;
    name?: string;
    english_name?: string;
    data?: {
      biography?: string;
      name?: string;
    };
  }[];
};
export type TranslationsApiArg = {
  personId: number;
};
export type Get3ReviewByReviewIdApiResponse = /** status 200 200 */ {
  id?: string;
  author?: string;
  author_details?: {
    name?: string;
    username?: string;
    avatar_path?: string;
    rating?: number;
  };
  content?: string;
  created_at?: string;
  iso_639_1?: string;
  media_id?: number;
  media_title?: string;
  media_type?: string;
  updated_at?: string;
  url?: string;
};
export type Get3ReviewByReviewIdApiArg = {
  reviewId: string;
};
export type Get3SearchCollectionApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchCollectionApiArg = {
  query: string;
  includeAdult?: boolean;
  language?: string;
  page?: number;
  region?: string;
};
export type Get3SearchCompanyApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchCompanyApiArg = {
  query: string;
  page?: number;
};
export type Get3SearchKeywordApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    id?: number;
    name?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchKeywordApiArg = {
  query: string;
  page?: number;
};
export type Get3SearchMovieApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchMovieApiArg = {
  query: string;
  includeAdult?: boolean;
  language?: string;
  primaryReleaseYear?: string;
  page?: number;
  region?: string;
  year?: string;
};
export type Get3SearchMultiApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    name?: string;
    original_name?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchMultiApiArg = {
  query: string;
  includeAdult?: boolean;
  language?: string;
  page?: number;
};
export type Get3SearchPersonApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    known_for?: {
      adult?: boolean;
      backdrop_path?: string;
      id?: number;
      title?: string;
      original_language?: string;
      original_title?: string;
      overview?: string;
      poster_path?: string;
      media_type?: string;
      genre_ids?: number[];
      popularity?: number;
      release_date?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }[];
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchPersonApiArg = {
  query: string;
  includeAdult?: boolean;
  language?: string;
  page?: number;
};
export type Get3SearchTvApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3SearchTvApiArg = {
  query: string;
  /** Search only the first air date. Valid values are: 1000..9999 */
  firstAirDateYear?: number;
  includeAdult?: boolean;
  language?: string;
  page?: number;
  /** Search the first air date and all episode air dates. Valid values are: 1000..9999 */
  year?: number;
};
export type Get3TrendingAllByTimeWindowApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TrendingAllByTimeWindowApiArg = {
  timeWindow: 'day' | 'week';
  /** `ISO-639-1`-`ISO-3166-1` code */
  language?: string;
};
export type Get3TrendingMovieByTimeWindowApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TrendingMovieByTimeWindowApiArg = {
  timeWindow: 'day' | 'week';
  /** `ISO-639-1`-`ISO-3166-1` code */
  language?: string;
};
export type Get3TrendingPersonByTimeWindowApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    id?: number;
    name?: string;
    original_name?: string;
    media_type?: string;
    popularity?: number;
    gender?: number;
    known_for_department?: string;
    profile_path?: string;
    known_for?: {
      adult?: boolean;
      backdrop_path?: string;
      id?: number;
      title?: string;
      original_language?: string;
      original_title?: string;
      overview?: string;
      poster_path?: string;
      media_type?: string;
      genre_ids?: number[];
      popularity?: number;
      release_date?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }[];
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TrendingPersonByTimeWindowApiArg = {
  timeWindow: 'day' | 'week';
  /** `ISO-639-1`-`ISO-3166-1` code */
  language?: string;
};
export type Get3TrendingTvByTimeWindowApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    first_air_date?: string;
    vote_average?: number;
    vote_count?: number;
    origin_country?: string[];
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TrendingTvByTimeWindowApiArg = {
  timeWindow: 'day' | 'week';
  /** `ISO-639-1`-`ISO-3166-1` code */
  language?: string;
};
export type Get3TvAiringTodayApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvAiringTodayApiArg = {
  language?: string;
  page?: number;
  timezone?: string;
};
export type Get3TvOnTheAirApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvOnTheAirApiArg = {
  language?: string;
  page?: number;
  timezone?: string;
};
export type Get3TvPopularApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvPopularApiArg = {
  language?: string;
  page?: number;
};
export type Get3TvTopRatedApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvTopRatedApiArg = {
  language?: string;
  page?: number;
};
export type Get3TvBySeriesIdApiResponse = /** status 200 200 */ {
  adult?: boolean;
  backdrop_path?: string;
  created_by?: {
    id?: number;
    credit_id?: string;
    name?: string;
    gender?: number;
    profile_path?: string;
  }[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: {
    id?: number;
    name?: string;
  }[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: {
    id?: number;
    name?: string;
    overview?: string;
    vote_average?: number;
    vote_count?: number;
    air_date?: string;
    episode_number?: number;
    production_code?: string;
    runtime?: number;
    season_number?: number;
    show_id?: number;
    still_path?: string;
  };
  name?: string;
  next_episode_to_air?: any;
  networks?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: {
    iso_3166_1?: string;
    name?: string;
  }[];
  seasons?: {
    air_date?: string;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
    vote_average?: number;
  }[];
  spoken_languages?: {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }[];
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
};
export type Get3TvBySeriesIdApiArg = {
  seriesId: number;
  /** comma separated list of endpoints within this namespace, 20 items max */
  appendToResponse?: string;
  language?: string;
};
export type Get3TvBySeriesIdAccountStatesApiResponse = /** status 200 200 */ {
  id?: number;
  favorite?: boolean;
  rated?: {
    value?: number;
  };
  watchlist?: boolean;
};
export type Get3TvBySeriesIdAccountStatesApiArg = {
  seriesId: number;
  sessionId?: string;
  guestSessionId?: string;
};
export type Get3TvBySeriesIdAggregateCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      roles?: {
        credit_id?: string;
        character?: string;
        episode_count?: number;
      }[];
      total_episode_count?: number;
      order?: number;
    }[];
    crew?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      jobs?: {
        credit_id?: string;
        job?: string;
        episode_count?: number;
      }[];
      department?: string;
      total_episode_count?: number;
    }[];
    id?: number;
  };
export type Get3TvBySeriesIdAggregateCreditsApiArg = {
  seriesId: number;
  language?: string;
};
export type Get3TvBySeriesIdAlternativeTitlesApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      iso_3166_1?: string;
      title?: string;
      type?: string;
    }[];
  };
export type Get3TvBySeriesIdAlternativeTitlesApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdChangesApiResponse = /** status 200 200 */ {
  changes?: {
    key?: string;
    items?: {
      id?: string;
      action?: string;
      time?: string;
      iso_639_1?: string;
      iso_3166_1?: string;
      value?: {
        poster?: {
          file_path?: string;
          iso_639_1?: string;
        };
      };
      original_value?: {
        poster?: {
          file_path?: string;
          iso_639_1?: string;
        };
      };
    }[];
  }[];
};
export type Get3TvBySeriesIdChangesApiArg = {
  seriesId: number;
  endDate?: string;
  page?: number;
  startDate?: string;
};
export type Get3TvBySeriesIdContentRatingsApiResponse = /** status 200 200 */ {
  results?: {
    descriptors?: any;
    iso_3166_1?: string;
    rating?: string;
  }[];
  id?: number;
};
export type Get3TvBySeriesIdContentRatingsApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdCreditsApiResponse = /** status 200 200 */ {
  cast?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    character?: string;
    credit_id?: string;
    order?: number;
  }[];
  crew?: {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    credit_id?: string;
    department?: string;
    job?: string;
  }[];
  id?: number;
};
export type Get3TvBySeriesIdCreditsApiArg = {
  seriesId: number;
  language?: string;
};
export type Get3TvBySeriesIdEpisodeGroupsApiResponse = /** status 200 200 */ {
  results?: {
    description?: string;
    episode_count?: number;
    group_count?: number;
    id?: string;
    name?: string;
    network?: {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    };
    type?: number;
  }[];
  id?: number;
};
export type Get3TvBySeriesIdEpisodeGroupsApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdExternalIdsApiResponse = /** status 200 200 */ {
  id?: number;
  imdb_id?: string;
  freebase_mid?: string;
  freebase_id?: string;
  tvdb_id?: number;
  tvrage_id?: number;
  wikidata_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
};
export type Get3TvBySeriesIdExternalIdsApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdImagesApiResponse = /** status 200 200 */ {
  backdrops?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: any;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
  id?: number;
  logos?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
  posters?: {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }[];
};
export type Get3TvBySeriesIdImagesApiArg = {
  seriesId: number;
  /** specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null` */
  includeImageLanguage?: string;
  language?: string;
};
export type Get3TvBySeriesIdKeywordsApiResponse = /** status 200 200 */ {
  id?: number;
  results?: {
    name?: string;
    id?: number;
  }[];
};
export type Get3TvBySeriesIdKeywordsApiArg = {
  seriesId: number;
};
export type Get3TvLatestApiResponse = /** status 200 200 */ {
  adult?: boolean;
  backdrop_path?: any;
  created_by?: any;
  episode_run_time?: any;
  first_air_date?: string;
  genres?: any;
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: any;
  last_air_date?: string;
  last_episode_to_air?: {
    id?: number;
    name?: string;
    overview?: string;
    vote_average?: number;
    vote_count?: number;
    air_date?: string;
    episode_number?: number;
    production_code?: string;
    runtime?: any;
    season_number?: number;
    show_id?: number;
    still_path?: any;
  };
  name?: string;
  next_episode_to_air?: any;
  networks?: any;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: any;
  production_companies?: any;
  production_countries?: any;
  seasons?: {
    air_date?: any;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: any;
    season_number?: number;
  }[];
  spoken_languages?: any;
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
};
export type Get3TvLatestApiArg = void;
export type Get3TvBySeriesIdListsApiResponse = /** status 200 200 */ {
  id?: number;
  page?: number;
  results?: {
    description?: string;
    favorite_count?: number;
    id?: number;
    item_count?: number;
    iso_639_1?: string;
    iso_3166_1?: string;
    name?: string;
    poster_path?: any;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvBySeriesIdListsApiArg = {
  seriesId: number;
  language?: string;
  page?: number;
};
export type Get3TvBySeriesIdRecommendationsApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    first_air_date?: string;
    vote_average?: number;
    vote_count?: number;
    origin_country?: string[];
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvBySeriesIdRecommendationsApiArg = {
  seriesId: number;
  language?: string;
  page?: number;
};
export type Get3TvBySeriesIdReviewsApiResponse = /** status 200 200 */ {
  id?: number;
  page?: number;
  results?: {
    author?: string;
    author_details?: {
      name?: string;
      username?: string;
      avatar_path?: string;
      rating?: number;
    };
    content?: string;
    created_at?: string;
    id?: string;
    updated_at?: string;
    url?: string;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvBySeriesIdReviewsApiArg = {
  seriesId: number;
  language?: string;
  page?: number;
};
export type Get3TvBySeriesIdScreenedTheatricallyApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      id?: number;
      episode_number?: number;
      season_number?: number;
    }[];
  };
export type Get3TvBySeriesIdScreenedTheatricallyApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdSimilarApiResponse = /** status 200 200 */ {
  page?: number;
  results?: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
  total_pages?: number;
  total_results?: number;
};
export type Get3TvBySeriesIdSimilarApiArg = {
  seriesId: string;
  language?: string;
  page?: number;
};
export type Get3TvBySeriesIdTranslationsApiResponse = /** status 200 200 */ {
  id?: number;
  translations?: {
    iso_3166_1?: string;
    iso_639_1?: string;
    name?: string;
    english_name?: string;
    data?: {
      name?: string;
      overview?: string;
      homepage?: string;
      tagline?: string;
    };
  }[];
};
export type Get3TvBySeriesIdTranslationsApiArg = {
  seriesId: number;
};
export type Get3TvBySeriesIdVideosApiResponse = /** status 200 200 */ {
  id?: number;
  results?: {
    iso_639_1?: string;
    iso_3166_1?: string;
    name?: string;
    key?: string;
    site?: string;
    size?: number;
    type?: string;
    official?: boolean;
    published_at?: string;
    id?: string;
  }[];
};
export type Get3TvBySeriesIdVideosApiArg = {
  seriesId: number;
  /** filter the list results by language, supports more than one value by using a comma */
  includeVideoLanguage?: string;
  language?: string;
};
export type Get3TvBySeriesIdWatchProvidersApiResponse = /** status 200 200 */ {
  id?: number;
  results?: {
    AE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    AR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    AT?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    AU?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BA?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BB?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BG?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BO?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    BS?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CA?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CH?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CI?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CL?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CO?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    CZ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    DE?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    DK?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    DO?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    DZ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    EC?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    EG?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    ES?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    FI?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    FR?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    GB?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    GF?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    GH?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    GQ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    GT?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    HK?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    HN?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    HR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    HU?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    ID?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    IE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    IL?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    IQ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    IT?: {
      link?: string;
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    JM?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    JP?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      rent?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    KE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    KR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    LB?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    LT?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    LY?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MD?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MK?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MU?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MX?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MY?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    MZ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    NE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    NG?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    NL?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    NO?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    NZ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PA?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PH?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PL?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      rent?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PS?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PT?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    PY?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    RO?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    RS?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    RU?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      ads?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SA?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SC?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SG?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SI?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SK?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SN?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    SV?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    TH?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    TR?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    TT?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    TW?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    TZ?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    UG?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    US?: {
      link?: string;
      free?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      buy?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    UY?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    VE?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    ZA?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
    ZM?: {
      link?: string;
      flatrate?: {
        logo_path?: string;
        provider_id?: number;
        provider_name?: string;
        display_priority?: number;
      }[];
    };
  };
};
export type Get3TvBySeriesIdWatchProvidersApiArg = {
  seriesId: number;
};
export type Post3TvBySeriesIdRatingApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Post3TvBySeriesIdRatingApiArg = {
  seriesId: number;
  guestSessionId?: string;
  sessionId?: string;
  'Content-Type': string;
  body: {
    RAW_BODY: string;
  };
};
export type Delete3TvBySeriesIdRatingApiResponse = /** status 200 200 */ {
  status_code?: number;
  status_message?: string;
};
export type Delete3TvBySeriesIdRatingApiArg = {
  seriesId: number;
  'Content-Type'?: string;
  guestSessionId?: string;
  sessionId?: string;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberApiResponse =
  /** status 200 200 */ {
    _id?: string;
    air_date?: string;
    episodes?: {
      air_date?: string;
      episode_number?: number;
      episode_type?: string;
      id?: number;
      name?: string;
      overview?: string;
      production_code?: string;
      runtime?: number;
      season_number?: number;
      show_id?: number;
      still_path?: string;
      vote_average?: number;
      vote_count?: number;
      crew?: {
        department?: string;
        job?: string;
        credit_id?: string;
        adult?: boolean;
        gender?: number;
        id?: number;
        known_for_department?: string;
        name?: string;
        original_name?: string;
        popularity?: number;
        profile_path?: string;
      }[];
      guest_stars?: {
        character?: string;
        credit_id?: string;
        order?: number;
        adult?: boolean;
        gender?: number;
        id?: number;
        known_for_department?: string;
        name?: string;
        original_name?: string;
        popularity?: number;
        profile_path?: string;
      }[];
    }[];
    name?: string;
    networks?: {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    }[];
    overview?: string;
    id?: number;
    poster_path?: string;
    season_number?: number;
    vote_average?: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberApiArg = {
  seriesId: number;
  seasonNumber: number;
  /** comma separated list of endpoints within this namespace, 20 items max */
  appendToResponse?: string;
  language?: string;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberAccountStatesApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      id?: number;
      episode_number?: number;
      rated?: {
        value?: number;
      };
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberAccountStatesApiArg = {
  seriesId: number;
  sessionId?: string;
  guestSessionId?: string;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberAggregateCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      roles?: {
        credit_id?: string;
        character?: string;
        episode_count?: number;
      }[];
      total_episode_count?: number;
      order?: number;
    }[];
    crew?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: any;
      jobs?: {
        credit_id?: string;
        job?: string;
        episode_count?: number;
      }[];
      department?: string;
      total_episode_count?: number;
    }[];
    id?: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberAggregateCreditsApiArg = {
  seriesId: number;
  language?: string;
  seasonNumber: number;
};
export type Get3TvSeasonBySeasonIdChangesApiResponse = /** status 200 200 */ {
  changes?: {
    key?: string;
    items?: {
      id?: string;
      action?: string;
      time?: string;
      value?: {
        episode_id?: number;
        episode_number?: number;
      };
    }[];
  }[];
};
export type Get3TvSeasonBySeasonIdChangesApiArg = {
  endDate?: string;
  page?: number;
  startDate?: string;
  seasonId: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      character?: string;
      credit_id?: string;
      order?: number;
    }[];
    crew?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: any;
      credit_id?: string;
      department?: string;
      job?: string;
    }[];
    id?: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberCreditsApiArg = {
  seriesId: number;
  seasonNumber: number;
  language?: string;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberExternalIdsApiResponse =
  /** status 200 200 */ {
    id?: number;
    freebase_mid?: string;
    freebase_id?: string;
    tvdb_id?: number;
    tvrage_id?: any;
    wikidata_id?: string;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberExternalIdsApiArg = {
  seriesId: number;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberImagesApiResponse =
  /** status 200 200 */ {
    id?: number;
    posters?: {
      aspect_ratio?: number;
      height?: number;
      iso_639_1?: string;
      file_path?: string;
      vote_average?: number;
      vote_count?: number;
      width?: number;
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberImagesApiArg = {
  seriesId: number;
  /** specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null` */
  includeImageLanguage?: string;
  language?: string;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberTranslationsApiResponse =
  /** status 200 200 */ {
    id?: number;
    translations?: {
      iso_3166_1?: string;
      iso_639_1?: string;
      name?: string;
      english_name?: string;
      data?: {
        name?: string;
        overview?: string;
      };
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberTranslationsApiArg = {
  seriesId: number;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberVideosApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      iso_639_1?: string;
      iso_3166_1?: string;
      name?: string;
      key?: string;
      site?: string;
      size?: number;
      type?: string;
      official?: boolean;
      published_at?: string;
      id?: string;
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberVideosApiArg = {
  seriesId: number;
  /** filter the list results by language, supports more than one value by using a comma */
  includeVideoLanguage?: string;
  language?: string;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberWatchProvidersApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      AD?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AT?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      AU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BB?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BE?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BS?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      BZ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CH?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CL?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      CZ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      DO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      EC?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      EG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ES?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      FI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      FR?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GB?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GG?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GQ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      GY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HN?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      HU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ID?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IN?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IQ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      IT?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      JP?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        rent?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      KE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LB?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      LC?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MC?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MD?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ME?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ML?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MX?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      MZ?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NL?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      NZ?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      OM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PL?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PT?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      PY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      QA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RO?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RS?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      RU?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SC?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SE?: {
        link?: string;
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SG?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SI?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SK?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SN?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      SV?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TC?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TD?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TH?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TR?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TT?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      TW?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      US?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
        buy?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      UY?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      VE?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ZA?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ZM?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
      ZW?: {
        link?: string;
        flatrate?: {
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
          display_priority?: number;
        }[];
      };
    };
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberWatchProvidersApiArg = {
  seriesId: number;
  language?: string;
  seasonNumber: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberApiResponse =
  /** status 200 200 */ {
    air_date?: string;
    crew?: {
      department?: string;
      job?: string;
      credit_id?: string;
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
    }[];
    episode_number?: number;
    guest_stars?: {
      character?: string;
      credit_id?: string;
      order?: number;
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
    }[];
    name?: string;
    overview?: string;
    id?: number;
    production_code?: string;
    runtime?: number;
    season_number?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberApiArg = {
  seriesId: number;
  seasonNumber: number;
  episodeNumber: number;
  /** comma separated list of endpoints within this namespace, 20 items max */
  appendToResponse?: string;
  language?: string;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStatesApiResponse =
  /** status 200 200 */ {
    id?: number;
    favorite?: boolean;
    rated?: {
      value?: number;
    };
    watchlist?: boolean;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStatesApiArg =
  {
    seriesId: number;
    sessionId?: string;
    seasonNumber: number;
    episodeNumber: number;
    guestSessionId?: string;
  };
export type Get3TvEpisodeByEpisodeIdChangesApiResponse = /** status 200 200 */ {
  changes?: {
    key?: string;
    items?: {
      id?: string;
      action?: string;
      time?: string;
      value?: string;
    }[];
  }[];
};
export type Get3TvEpisodeByEpisodeIdChangesApiArg = {
  episodeId: number;
};
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCreditsApiResponse =
  /** status 200 200 */ {
    cast?: {
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
      character?: string;
      credit_id?: string;
      order?: number;
    }[];
    crew?: {
      department?: string;
      job?: string;
      credit_id?: string;
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
    }[];
    guest_stars?: {
      character?: string;
      credit_id?: string;
      order?: number;
      adult?: boolean;
      gender?: number;
      id?: number;
      known_for_department?: string;
      name?: string;
      original_name?: string;
      popularity?: number;
      profile_path?: string;
    }[];
    id?: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCreditsApiArg =
  {
    seriesId: number;
    seasonNumber: number;
    language?: string;
    episodeNumber: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIdsApiResponse =
  /** status 200 200 */ {
    id?: number;
    imdb_id?: string;
    freebase_mid?: string;
    freebase_id?: string;
    tvdb_id?: number;
    tvrage_id?: number;
    wikidata_id?: string;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIdsApiArg =
  {
    seriesId: number;
    seasonNumber: number;
    episodeNumber: string;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImagesApiResponse =
  /** status 200 200 */ {
    id?: number;
    stills?: {
      aspect_ratio?: number;
      height?: number;
      iso_639_1?: any;
      file_path?: string;
      vote_average?: number;
      vote_count?: number;
      width?: number;
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImagesApiArg =
  {
    seriesId: number;
    /** specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null` */
    includeImageLanguage?: string;
    language?: string;
    seasonNumber: number;
    episodeNumber: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslationsApiResponse =
  /** status 200 200 */ {
    id?: number;
    translations?: {
      iso_3166_1?: string;
      iso_639_1?: string;
      name?: string;
      english_name?: string;
      data?: {
        name?: string;
        overview?: string;
      };
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslationsApiArg =
  {
    seriesId: number;
    seasonNumber: number;
    episodeNumber: number;
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideosApiResponse =
  /** status 200 200 */ {
    id?: number;
    results?: {
      iso_639_1?: string;
      iso_3166_1?: string;
      name?: string;
      key?: string;
      site?: string;
      size?: number;
      type?: string;
      official?: boolean;
      published_at?: string;
      id?: string;
    }[];
  };
export type Get3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideosApiArg =
  {
    seriesId: number;
    /** filter the list results by language, supports more than one value by using a comma */
    includeVideoLanguage?: string;
    language?: string;
    seasonNumber: number;
    episodeNumber: number;
  };
export type Post3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiResponse =
  /** status 200 200 */ {
    status_code?: number;
    status_message?: string;
  };
export type Post3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiArg =
  {
    seriesId: number;
    guestSessionId?: string;
    sessionId?: string;
    'Content-Type': string;
    seasonNumber: number;
    episodeNumber: number;
    body: {
      RAW_BODY: string;
    };
  };
export type Delete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiResponse =
  /** status 200 200 */ {
    status_code?: number;
    status_message?: string;
  };
export type Delete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingApiArg =
  {
    seriesId: number;
    'Content-Type'?: string;
    guestSessionId?: string;
    sessionId?: string;
    seasonNumber: number;
    episodeNumber: number;
  };
export type Get3TvEpisodeGroupByTvEpisodeGroupIdApiResponse =
  /** status 200 200 */ {
    description?: string;
    episode_count?: number;
    group_count?: number;
    groups?: {
      id?: string;
      name?: string;
      order?: number;
      episodes?: {
        air_date?: string;
        episode_number?: number;
        id?: number;
        name?: string;
        overview?: string;
        production_code?: string;
        runtime?: any;
        season_number?: number;
        show_id?: number;
        still_path?: string;
        vote_average?: number;
        vote_count?: number;
        order?: number;
      }[];
      locked?: boolean;
    }[];
    id?: string;
    name?: string;
    network?: {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    };
    type?: number;
  };
export type Get3TvEpisodeGroupByTvEpisodeGroupIdApiArg = {
  tvEpisodeGroupId: string;
};
export type Get3WatchProvidersRegionsApiResponse = /** status 200 200 */ {
  results?: {
    iso_3166_1?: string;
    english_name?: string;
    native_name?: string;
  }[];
};
export type Get3WatchProvidersRegionsApiArg = {
  language?: string;
};
export type Get3WatchProvidersMovieApiResponse = /** status 200 200 */ {
  results?: {
    display_priorities?: {
      CA?: number;
      AE?: number;
      AR?: number;
      AT?: number;
      AU?: number;
      BE?: number;
      BO?: number;
      BR?: number;
      BG?: number;
      CH?: number;
      CL?: number;
      CO?: number;
      CR?: number;
      CZ?: number;
      DE?: number;
      DK?: number;
      EC?: number;
      EE?: number;
      EG?: number;
      ES?: number;
      FI?: number;
      FR?: number;
      GB?: number;
      GR?: number;
      GT?: number;
      HK?: number;
      HN?: number;
      HU?: number;
      ID?: number;
      IE?: number;
      IN?: number;
      IT?: number;
      JP?: number;
      LT?: number;
      LV?: number;
      MX?: number;
      MY?: number;
      NL?: number;
      NO?: number;
      NZ?: number;
      PE?: number;
      PH?: number;
      PL?: number;
      PT?: number;
      PY?: number;
      RU?: number;
      SA?: number;
      SE?: number;
      SG?: number;
      SK?: number;
      TH?: number;
      TR?: number;
      TW?: number;
      US?: number;
      VE?: number;
      ZA?: number;
      SI?: number;
      CV?: number;
      GH?: number;
      MU?: number;
      MZ?: number;
      UG?: number;
      IL?: number;
    };
    display_priority?: number;
    logo_path?: string;
    provider_name?: string;
    provider_id?: number;
  }[];
};
export type Get3WatchProvidersMovieApiArg = {
  language?: string;
  watchRegion?: string;
};
export type Get3WatchProvidersTvApiResponse = /** status 200 200 */ {
  results?: {
    display_priorities?: {
      CA?: number;
      AE?: number;
      AR?: number;
      AT?: number;
      AU?: number;
      BE?: number;
      BO?: number;
      BR?: number;
      BG?: number;
      CH?: number;
      CL?: number;
      CO?: number;
      CR?: number;
      CZ?: number;
      DE?: number;
      DK?: number;
      EC?: number;
      EE?: number;
      EG?: number;
      ES?: number;
      FI?: number;
      FR?: number;
      GB?: number;
      GR?: number;
      GT?: number;
      HK?: number;
      HN?: number;
      HU?: number;
      ID?: number;
      IE?: number;
      IN?: number;
      IT?: number;
      JP?: number;
      LT?: number;
      LV?: number;
      MX?: number;
      MY?: number;
      NL?: number;
      NO?: number;
      NZ?: number;
      PE?: number;
      PH?: number;
      PL?: number;
      PT?: number;
      PY?: number;
      RU?: number;
      SA?: number;
      SE?: number;
      SG?: number;
      SK?: number;
      TH?: number;
      TR?: number;
      TW?: number;
      US?: number;
      VE?: number;
      ZA?: number;
      SI?: number;
      CV?: number;
      GH?: number;
      MU?: number;
      MZ?: number;
      UG?: number;
      IL?: number;
    };
    display_priority?: number;
    logo_path?: string;
    provider_name?: string;
    provider_id?: number;
  }[];
};
export type Get3WatchProvidersTvApiArg = {
  language?: string;
  watchRegion?: string;
};
export const {
  useGet3AuthenticationQuery,
  useGet3AccountByAccountIdQuery,
  usePost3AccountByAccountIdFavoriteMutation,
  usePost3AccountByAccountIdWatchlistMutation,
  useGet3AccountByAccountIdFavoriteMoviesQuery,
  useGet3AccountByAccountIdFavoriteTvQuery,
  useGet3AccountByAccountIdListsQuery,
  useGet3AccountByAccountIdRatedMoviesQuery,
  useGet3AccountByAccountIdRatedTvQuery,
  useGet3AccountByAccountIdRatedTvEpisodesQuery,
  useGet3AccountByAccountIdWatchlistMoviesQuery,
  useGet3AccountByAccountIdWatchlistTvQuery,
  useGet3AuthenticationGuestSessionNewQuery,
  useGet3AuthenticationTokenNewQuery,
  usePost3AuthenticationSessionNewMutation,
  usePost3AuthenticationSessionConvert4Mutation,
  usePost3AuthenticationTokenValidateWithLoginMutation,
  useDelete3AuthenticationSessionMutation,
  useGet3CertificationMovieListQuery,
  useGet3CertificationTvListQuery,
  useGet3MovieChangesQuery,
  useGet3PersonChangesQuery,
  useGet3TvChangesQuery,
  useGet3CollectionByCollectionIdQuery,
  useGet3CollectionByCollectionIdImagesQuery,
  useGet3CollectionByCollectionIdTranslationsQuery,
  useGet3CompanyByCompanyIdQuery,
  useGet3CompanyByCompanyIdAlternativeNamesQuery,
  useGet3CompanyByCompanyIdImagesQuery,
  useGet3ConfigurationQuery,
  useGet3ConfigurationCountriesQuery,
  useGet3ConfigurationJobsQuery,
  useGet3ConfigurationLanguagesQuery,
  useGet3ConfigurationPrimaryTranslationsQuery,
  useGet3ConfigurationTimezonesQuery,
  useGet3CreditByCreditIdQuery,
  useGet3DiscoverMovieQuery,
  useGet3DiscoverTvQuery,
  useGet3FindByExternalIdQuery,
  useGet3GenreMovieListQuery,
  useGet3GenreTvListQuery,
  useGet3GuestSessionByGuestSessionIdRatedMoviesQuery,
  useGet3GuestSessionByGuestSessionIdRatedTvQuery,
  useGet3GuestSessionByGuestSessionIdRatedTvEpisodesQuery,
  useGet3KeywordByKeywordIdQuery,
  useGet3KeywordByKeywordIdMoviesQuery,
  usePost3ListByListIdAddItemMutation,
  useGet3ListByListIdItemStatusQuery,
  usePost3ListByListIdClearMutation,
  usePost3ListMutation,
  useDelete3ListByListIdMutation,
  useGet3ListByListIdQuery,
  usePost3ListByListIdRemoveItemMutation,
  useGet3MovieNowPlayingQuery,
  useGet3MoviePopularQuery,
  useGet3MovieTopRatedQuery,
  useGet3MovieUpcomingQuery,
  useGet3MovieByMovieIdQuery,
  useGet3MovieByMovieIdAccountStatesQuery,
  useGet3MovieByMovieIdAlternativeTitlesQuery,
  useGet3MovieByMovieIdChangesQuery,
  useGet3MovieByMovieIdCreditsQuery,
  useGet3MovieByMovieIdExternalIdsQuery,
  useGet3MovieByMovieIdImagesQuery,
  useGet3MovieByMovieIdKeywordsQuery,
  useGet3MovieLatestQuery,
  useGet3MovieByMovieIdListsQuery,
  useGet3MovieByMovieIdRecommendationsQuery,
  useGet3MovieByMovieIdReleaseDatesQuery,
  useGet3MovieByMovieIdReviewsQuery,
  useGet3MovieByMovieIdSimilarQuery,
  useGet3MovieByMovieIdTranslationsQuery,
  useGet3MovieByMovieIdVideosQuery,
  useGet3MovieByMovieIdWatchProvidersQuery,
  usePost3MovieByMovieIdRatingMutation,
  useDelete3MovieByMovieIdRatingMutation,
  useGet3NetworkByNetworkIdQuery,
  useGet3NetworkByNetworkIdAlternativeNamesQuery,
  useGet3NetworkByNetworkIdImagesQuery,
  useGet3PersonPopularQuery,
  useGet3PersonByPersonIdQuery,
  useGet3PersonByPersonIdChangesQuery,
  useGet3PersonByPersonIdCombinedCreditsQuery,
  useGet3PersonByPersonIdExternalIdsQuery,
  useGet3PersonByPersonIdImagesQuery,
  useGet3PersonLatestQuery,
  useGet3PersonByPersonIdMovieCreditsQuery,
  useGet3PersonByPersonIdTvCreditsQuery,
  useGet3PersonByPersonIdTaggedImagesQuery,
  useTranslationsQuery,
  useGet3ReviewByReviewIdQuery,
  useGet3SearchCollectionQuery,
  useGet3SearchCompanyQuery,
  useGet3SearchKeywordQuery,
  useGet3SearchMovieQuery,
  useGet3SearchMultiQuery,
  useGet3SearchPersonQuery,
  useGet3SearchTvQuery,
  useGet3TrendingAllByTimeWindowQuery,
  useGet3TrendingMovieByTimeWindowQuery,
  useGet3TrendingPersonByTimeWindowQuery,
  useGet3TrendingTvByTimeWindowQuery,
  useGet3TvAiringTodayQuery,
  useGet3TvOnTheAirQuery,
  useGet3TvPopularQuery,
  useGet3TvTopRatedQuery,
  useGet3TvBySeriesIdQuery,
  useGet3TvBySeriesIdAccountStatesQuery,
  useGet3TvBySeriesIdAggregateCreditsQuery,
  useGet3TvBySeriesIdAlternativeTitlesQuery,
  useGet3TvBySeriesIdChangesQuery,
  useGet3TvBySeriesIdContentRatingsQuery,
  useGet3TvBySeriesIdCreditsQuery,
  useGet3TvBySeriesIdEpisodeGroupsQuery,
  useGet3TvBySeriesIdExternalIdsQuery,
  useGet3TvBySeriesIdImagesQuery,
  useGet3TvBySeriesIdKeywordsQuery,
  useGet3TvLatestQuery,
  useGet3TvBySeriesIdListsQuery,
  useGet3TvBySeriesIdRecommendationsQuery,
  useGet3TvBySeriesIdReviewsQuery,
  useGet3TvBySeriesIdScreenedTheatricallyQuery,
  useGet3TvBySeriesIdSimilarQuery,
  useGet3TvBySeriesIdTranslationsQuery,
  useGet3TvBySeriesIdVideosQuery,
  useGet3TvBySeriesIdWatchProvidersQuery,
  usePost3TvBySeriesIdRatingMutation,
  useDelete3TvBySeriesIdRatingMutation,
  useGet3TvBySeriesIdSeasonAndSeasonNumberQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberAccountStatesQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberAggregateCreditsQuery,
  useGet3TvSeasonBySeasonIdChangesQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberCreditsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberExternalIdsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberImagesQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberTranslationsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberVideosQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberWatchProvidersQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberAccountStatesQuery,
  useGet3TvEpisodeByEpisodeIdChangesQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberCreditsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberExternalIdsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberImagesQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberTranslationsQuery,
  useGet3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberVideosQuery,
  usePost3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingMutation,
  useDelete3TvBySeriesIdSeasonAndSeasonNumberEpisodeEpisodeNumberRatingMutation,
  useGet3TvEpisodeGroupByTvEpisodeGroupIdQuery,
  useGet3WatchProvidersRegionsQuery,
  useGet3WatchProvidersMovieQuery,
  useGet3WatchProvidersTvQuery,
} = injectedRtkApi;
