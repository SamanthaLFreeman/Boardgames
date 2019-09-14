export const ownedGames = (state = [], action) => {
  switch(action.type) {
    case 'ADD_OWNED':
      return [...state, action.game];
    default:
      return state;
  }
}