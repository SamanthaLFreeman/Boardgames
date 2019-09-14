export const ownedGames = (state = [], action) => {
  switch(action.type) {
    case 'ADD_OWNED':
      return [...state, action.game];
    case 'REMOVE_OWNED':
      return state.filter(game => game.id !== action.game.id);
    case 'UPDATE_GAME':
      let newArray = state.filter(game => game.id !== action.updatedGame.id)
      return [...newArray, action.updatedGame]
    default:
      return state;
  }
}