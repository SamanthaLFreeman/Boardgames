import * as actions from './index';

describe('actions', () => {
  it('should have a type of GET_GAMES', () => {
    const mockGames = [];
    const expectedAction = {
      type: 'GET_GAMES',
      games: []
    }

    const result = actions.getGames(mockGames);

    expect(result).toEqual(expectedAction);
  })
})