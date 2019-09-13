import { categories } from './categories';

describe('categories reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = categories(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved categories when GET_CATEGORIES action is passed through', () => {
    const expected = [
      {
        name: "Catan"
      }
    ]
    const actionObj = {
      type: 'GET_CATEGORIES',
      categories: [
        {
          name: "Catan"
        }
      ]
    }

    const result = categories(undefined, actionObj);

    expect(result).toEqual(expected);
  })
})