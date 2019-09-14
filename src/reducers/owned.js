export const ownedGames = (state = [], action) => {
  switch(action.type) {
    case 'ADD_OWNED':
      return [...state, action.game];
    case 'REMOVE_OWNED':
      return state.filter(game => game.id !== action.game.id)
    default:
      return state;
  }
}