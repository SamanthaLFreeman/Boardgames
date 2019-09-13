import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
})