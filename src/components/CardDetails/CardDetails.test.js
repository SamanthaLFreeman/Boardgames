import React from 'react';
import { shallow } from 'enzyme';
import { CardDetails } from './CardDetails';

describe('CardDetails', () => {
  let wrapper;
  const mockCard = {}
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

  beforeEach(() => {
    wrapper = shallow(<CardDetails 
    card={mockCard}
    categoriesIds={categoriesIdsMock}
    categoriesKey={categoriesKeyMock} />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
})