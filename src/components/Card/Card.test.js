import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

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
})