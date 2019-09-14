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
  });

  it('should have a type of ADD_FAVORITE', () => {
    const mockFavorite = {
      name: 'Dead of Winter',
      id: 43
    };
    const expectedAction = {
      type: 'ADD_FAVORITE',
      favorite: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = actions.addFavorite(mockFavorite);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_FAVORITE', () => {
    const mockFavorite = {
      name: 'Dead of Winter',
      id: 43
    };
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      favorite: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = actions.removeFavorite(mockFavorite);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_OWNED', () => {
    const mockGame = {
      name: 'Dead of Winter',
      id: 43
    };
    const expectedAction = {
      type: 'ADD_OWNED',
      game: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = actions.addOwned(mockGame);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_OWNED', () => {
    const mockGame = {
      name: 'Dead of Winter',
      id: 43
    };
    const expectedAction = {
      type: 'REMOVE_OWNED',
      game: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = actions.removeOwned(mockGame);

    expect(result).toEqual(expectedAction);
  });
})