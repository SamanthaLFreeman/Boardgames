export const getGames = games => ({
  type: 'GET_GAMES',
  games
})

export const getCategories = categories => ({
  type: 'GET_CATEGORIES',
  categories
})

export const addFavorite = id => ({
  type: 'ADD_FAVORITE',
  id
})

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  id
})