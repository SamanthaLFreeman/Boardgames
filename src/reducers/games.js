export const games = (state = [], action) => {
  switch (action.type) {
    case 'GET_GAME':
      return action.games;
    default:
      return state;
  }
}