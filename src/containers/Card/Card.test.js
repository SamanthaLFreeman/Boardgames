import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';

describe('Card', () => {
  let wrapper;
  const mockGame = {
    name: "Catan",
    id: 42
  }
  const toggleFavoriteMock = jest.fn();
  const toggleOwnedMock = jest.fn();
  const ownedGamesMock = [
    {
      name: 'Takenoko',
      id: 41
    }
  ]
  const favoritesMock = [
    {
      name: 'Dead of Winter',
      id: 43
    }
  ]
  const mockState = {
    games: [mockGame],
    categories: [{id: 1, name: 'Zombies'}],
    ownedGames: ownedGamesMock,
    favorites: favoritesMock
  }

  beforeEach(() => {
    wrapper = shallow(<Card
      game={mockGame}
      toggleFavorite={toggleFavoriteMock}
      toggleOwned={toggleOwnedMock}
      ownedGames={ownedGamesMock}
      favorites={favoritesMock} />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the toggleFavorite on the click of favorite button', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(toggleFavoriteMock).toHaveBeenCalledWith(mockGame, false);
  });

  it('should call the toggleOwned on the click of the owned button', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(toggleOwnedMock).toHaveBeenCalledWith(mockGame, false)
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      favorites: favoritesMock,
      ownedGames: ownedGamesMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
})