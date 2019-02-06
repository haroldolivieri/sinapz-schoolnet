import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('renders main layout', () => {
    const wrapper = shallow(<App />)
    const mainLayoutWrapper = wrapper.find('Connect(MainLayout)')

    expect(mainLayoutWrapper.exists()).toBe(true)
  });
});
