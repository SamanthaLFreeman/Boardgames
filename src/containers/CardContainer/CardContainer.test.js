import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';

describe('CardContainer', () => {
  let wrapper
  const mockGames = [
    {
      name: 'Catan',
      id: 42
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<CardContainer 
    games={mockGames}/>)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});