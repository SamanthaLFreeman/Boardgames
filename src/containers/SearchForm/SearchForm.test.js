import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../SearchForm/SearchForm';

describe('SearchForm', () => {
  let wrapper
  const cleanUpGamesMock = jest.fn();
  const getGamesMock = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<SearchForm   
      cleanUpGames={cleanUpGamesMock}
      getGames={getGamesMock} />)
  })

  it('should match the snapshot with all of the data passed through it', () => {
    expect(wrapper).toMatchSnapshot();
  })
})