import { favorites } from './favorites';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the added favorite when ADD_FAVORITE action is passed through', () => {
    const expected = [
      {
        name: 'Dead of Winter',
        id: 43
      }
    ]
    const actionObj = {
      type: 'ADD_FAVORITE',
      favorite: {
          name: 'Dead of Winter',
          id: 43
        }
    }

    const result = favorites(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state with the the favorite removed when REMOVE_FAVORITE action is passed through', () => {
    const expected = []
    const actionObj = {
      type: 'REMOVE_FAVORITE',
      favorite: {
        name: 'Dead of Winter',
        id: 43
      }
    }

    const result = favorites(undefined, actionObj);

    expect(result).toEqual(expected);
  });
})