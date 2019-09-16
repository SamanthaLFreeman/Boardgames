import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getPopularGames, getAllCategories, searchGames, randomGame } from '../../util/apiCalls';
import { getGames, getCategories, addFavorite, removeFavorite, addOwned, removeOwned } from '../../actions';

jest.mock('../../util/apiCalls');

getPopularGames.mockImplementation(() => {
  return Promise.resolve({
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
  })
});

searchGames.mockImplementation(() => {
  return Promise.resolve({
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
  })
});

randomGame.mockImplementation(() => {
  return Promise.resolve({
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
  })
});

getAllCategories.mockImplementation(() => {
  return Promise.resolve([{
    id: 1234,
    name: 'Zombies'
  }])
});

describe('App', () => {
  let wrapper
  const mockGames = {
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
  }
  const mockCategories = [{
    id: 1234,
    name: 'Zombies'
  }]
  const mockState = {
    games: [mockGames],
    categories: mockCategories,
    ownedGames: [mockGames],
    favorites: [mockGames]
  }
  const getGamesMock = jest.fn();
  const getCategoriesMock = jest.fn();
  const addFavoriteMock = jest.fn();
  const removeFavoriteMock = jest.fn();
  const addOwnedMock = jest.fn();
  const removeOwnedMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App
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
      currentGames: [mockGames],
      categories: mockCategories,
      ownedGames: [mockGames]
    }

    const mappedProps = mapStateToProps(mockState);
    
    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the getGames action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getGames([mockGames]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getGames([mockGames]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the getCategories action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getCategories(mockCategories);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getCategories(mockCategories);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the addFavorite action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addFavorite(mockGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite(mockGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the removeFavorite action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeFavorite(mockGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFavorite(mockGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the addOwned action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addOwned(mockGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addOwned(mockGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the removeOwned action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeOwned(mockGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeOwned(mockGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call addFavorite when toggleFavorite is given a false value', async () => {
    wrapper.instance().toggleFavorite(mockGames, false);
    expect(addFavoriteMock).toHaveBeenCalled();
  });

  it('should call removeFavorite when toggleFavorite is given a false value', async () => {
    wrapper.instance().toggleFavorite(mockGames, true);
    expect(removeFavoriteMock).toHaveBeenCalled();
  });

  it('should call addOwned when toggleOwned is given a false value', async () => {
    wrapper.instance().toggleOwned(mockGames, false);
    expect(addOwnedMock).toHaveBeenCalled();
  });

  it('should call removeOwned when toggleOwned is given a false value', async () => {
    wrapper.instance().toggleOwned(mockGames, true);
    expect(removeOwnedMock).toHaveBeenCalled();
  });

  it('should call getPopularGames and getAllCategories when mounting', () => {
    expect(getPopularGames).toHaveBeenCalled();
    expect(getAllCategories).toHaveBeenCalled();
  });
});
