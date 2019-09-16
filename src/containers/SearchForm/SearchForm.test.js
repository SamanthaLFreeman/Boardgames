import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapDispatchToProps } from '../SearchForm/SearchForm';
import { getGames } from '../../actions';
import { getPopularGames, searchGames, randomGame } from '../../util/apiCalls';

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

describe('SearchForm', () => {
  let wrapper
  const cleanUpGamesMock = jest.fn();
  const getGamesMock = jest.fn();
  const mockSearchGames = [{
    name: 'Catan',
    id: 42
  }]
  const mockPopularGames = [{
    name: 'Dead of Winter',
    id: 43
  }]
  const mockRandomGame = {
    name: 'Ticket to Ride',
    id: 44
  }

  beforeEach(() => {
    wrapper = shallow(<SearchForm   
      cleanUpGames={cleanUpGamesMock}
      getGames={getGamesMock} />)
  });

  it('should match the snapshot with all of the data passed through it', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'Catan' }};
    const expected = 'Catan';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should run handleInputSubmit when the button is clicked', () => {
    wrapper.instance().handleInputSubmit = jest.fn();
    const mockEvent = {preventDefault: jest.fn()};
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().handleInputSubmit).toHaveBeenCalled();
  });

  it('should run handlePopularSubmit when the button is clicked', () => {
    wrapper.instance().handlePopularSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(1).simulate('click', mockEvent);

    expect(wrapper.instance().handlePopularSubmit).toHaveBeenCalled();
  });

  it('should run handleRandomSubmit when the button is clicked', () => {
    wrapper.instance().handleRandomSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(2).simulate('click', mockEvent);

    expect(wrapper.instance().handleRandomSubmit).toHaveBeenCalled();
  });

  it('it calls dispatch with the getGames action with the searchedGames data', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getGames(mockSearchGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getGames(mockSearchGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the getGames action with the getPopularGames data', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getGames(mockPopularGames);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getGames(mockPopularGames);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the getGames action with the randomGame data', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getGames(mockRandomGame);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getGames(mockRandomGame);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call searchGames when handleInputSubmit is called', async () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().handleInputSubmit(mockEvent);
    expect(searchGames).toHaveBeenCalled();
  });

  it('should call getPopularGames when handlePopularSubmit is called', async () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().handlePopularSubmit(mockEvent);
    expect(getPopularGames).toHaveBeenCalled();
  });

  it('should call randomGame when handleRandomSubmit is called', async () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().handleRandomSubmit(mockEvent);
    expect(randomGame).toHaveBeenCalled();
  });
})