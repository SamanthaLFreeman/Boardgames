export const getGames = games => ({
  type: 'GET_GAMES',
  games
})

export const getCategories = categories => ({
  type: 'GET_CATEGORIES',
  categories
})

export const addFavorite = favorite => ({
  type: 'ADD_FAVORITE',
  favorite
})

export const removeFavorite = favorite => ({
  type: 'REMOVE_FAVORITE',
  favorite
})