import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {
  let wrapper;
  const mockGame = {
    name: "Catan",
    id: 42
  }

  beforeEach(() => {
    wrapper = shallow(<Card
      game={mockGame} />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
})