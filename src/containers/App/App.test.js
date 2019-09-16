import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getPopularGames, getAllCategories } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

getPopularGames.mockImplementation(() => {
  return Promise.resolve([{
    id: 42,
    name: "Catan",
    year_published: 1999,
    min_players: 2,
    max_players: 6,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "Gotta get all the sheep",
    image_url: "image",
    primary_publisher: "me",
    categories: [{ id: "1234" }],
    rules_url: "rules link"
  }])
});

getAllCategories.mockImplementation(() => {
  return Promise.resolve([{
    id: 1234,
    name: 'Zombies'
  }])
});

describe('App', () => {
  let wrapper
  const mockGames = [{
    id: 42,
    name: "Catan",
    year_published: 1999,
    min_players: 2,
    max_players: 6,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "Gotta get all the sheep",
    image_url: "image",
    primary_publisher: "me",
    categories: [{ id: "1234" }],
    rules_url: "rules link"
  }]
  const mockCategories = [{
    id: 1234,
    name: 'Zombies'
  }]
  const mockState = {
    currentGames: mockGames,
    categories: mockCategories,
    ownedGames: mockGames,
    favorites: mockGames
  }
  const getGamesMock = jest.fn();
  const getCategoriesMock = jest.fn();
  const addFavoriteMock = jest.fn();
  const removeFavoriteMock = jest.fn();
  const addOwnedMock = jest.fn();
  const removeOwnedMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App
      currentGames={mockGames}
      categories={mockCategories}
      ownedGames={mockGames}
      getGames={getGamesMock}
      getCategories={getCategoriesMock}
      addFavorite={addFavoriteMock}
      removeFavorite={removeFavoriteMock}
      addOwned={addOwnedMock}
      removeOwned={removeOwnedMock}
      />);
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      currentGames: mockGames,
      categories: mockCategories,
      ownedGames: mockGames
    }
    const mappedProps = mapStateToProps(mockState);
    
    expect(mappedProps).toEqual(expected);
  });
});
