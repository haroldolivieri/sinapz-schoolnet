import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('renders MainLayout', () => {
    const mainLayout = shallow(<App />).find('MainLayout')
    expect(mainLayout.exists()).toEqual(true)
  });
});
