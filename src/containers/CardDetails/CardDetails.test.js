import React from 'react';
import { shallow } from 'enzyme';
import { CardDetails } from './CardDetails';

describe('CardDetails', () => {
  let wrapper;
  const mockCard = {
    name: 'Takenoko',
    id: 41
  }
  const categoriesIdsMock = [
    {
      id: 1234
    }
  ]
  const categoriesKeyMock = [
    {
      id: 1234,
      name: "Fantasy"
    }
  ]
  const ownedGamesMock = [
    {
      name: 'Takenoko',
      id: 41
    }
  ]
  const updateGameMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CardDetails 
    card={mockCard}
    id={41}
    categoriesIds={categoriesIdsMock}
    categoriesKey={categoriesKeyMock}
    ownedGames={ownedGamesMock}
    updateGame={updateGameMock} />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'house_rules', value: 'Start with 7 cards' } };
    const expected = 'Start with 7 cards';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('house_rules')).toEqual(expected);
  });

  it('should run handleSubmit when the button is clicked', () => {
    wrapper.instance().handleSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });
})