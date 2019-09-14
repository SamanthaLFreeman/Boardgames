import { ownedGames } from './owned';

describe('ownedGames reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = ownedGames(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the the game added when ADD_OWNED action is passed through', () => {
    const expected = [
      {
        name: 'Dead of Winter',
        id: 43
      }
    ]
    const actionObj = {
      type: 'ADD_OWNED',
      game: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = ownedGames(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state with the the game removed when REMOVE_OWNED action is passed through', () => {
    const expected = []
    const actionObj = {
      type: 'REMOVE_OWNED',
      game: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = ownedGames(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state with the the game updated when UPDATE_GAME action is passed through', () => {
    const expected = [
      {
        name: 'Dead of Winter',
        id: 43,
        house_rules: '7 cards to start'
      }
    ]
    const actionObj = {
      type: 'UPDATE_GAME',
      updatedGame: {
        name: 'Dead of Winter',
        id: 43,
        house_rules: '7 cards to start'
      }
    }

    const result = ownedGames([{
      name: 'Dead of Winter',
      id: 43
    }], actionObj);

    expect(result).toEqual(expected);
  });
})