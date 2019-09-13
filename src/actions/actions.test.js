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
  });

  it('should have a type of GET_CATEGORIES', () => {
    const mockCategories = [];
    const expectedAction = {
      type: 'GET_CATEGORIES',
      categories: []
    }

    const result = actions.getCategories(mockCategories);

    expect(result).toEqual(expectedAction);
  })
})