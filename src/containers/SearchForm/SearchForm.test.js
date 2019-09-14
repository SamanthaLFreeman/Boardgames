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
})