import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('responsive drawer starts closed', () => {
    const responsiveDrawer = shallow(<App />).find('ResponsiveDrawer')
    expect(responsiveDrawer.props().navDrawerOpened).toBe(false)
  });

  it('hamburguer menu hidden', () => {
    const wrapper = shallow(<App />).find('ResponsiveDrawer')
    const menu = wrapper.find('IconButton')
    expect(menu).toHaveLength(0);
  });
});
