import { games } from './games';

describe('games reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = games(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved games when GET_GAMES action is passed through', () => {
    const expected = [
      {
        name: "Catan"
      }
    ];

    const actionObj = {
      type: 'GET_GAMES',
      games: [
        {
          name: "Catan"
        }
      ]
    }

    const result = games(undefined, actionObj);

    expect(result).toEqual(expected);
  })
})