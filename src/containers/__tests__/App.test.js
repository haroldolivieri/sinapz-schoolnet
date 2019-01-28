import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });
  
  it('side drawer renders correctly', () => {
    const sideDrawer = mount(<App />).find('SideDrawer')
    expect(sideDrawer).toMatchSnapshot()
  });

  it('responsive drawer starts close', () => {
    const responsiveDrawer = shallow(<App />).find('ResponsiveDrawer')
    expect(responsiveDrawer.props().navDrawerOpened).toBe(false)
  });

  it('hamburguer menu hidden', () => {
    const wrapper = shallow(<App />).find('ResponsiveDrawer')
    const menu = wrapper.find('IconButton')
    expect(menu).toMatchSnapshot()
  });
});
