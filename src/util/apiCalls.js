export const getPopularGames = () => {
  return fetch('https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=igbjxf77TF')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching popular games')
      }
      return response.json()
    })
}

export const getAllCategories = () => {
  return fetch('https://www.boardgameatlas.com/api/game/categories?client_id=igbjxf77TF')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching categories')
      }
      return response.json()
    })
}

export const searchGames = (name) => {
  return fetch(`https://www.boardgameatlas.com/api/search?name=${name}&client_id=igbjxf77TF`)
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching games')
      }
      return response.json();
    })
}

export const randomGame = () => {
  return fetch('https://www.boardgameatlas.com/api/search?random=true&client_id=igbjxf77TF')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching game')
      }
      return response.json();
    })
}