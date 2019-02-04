import React from 'react';
import MainLayout from '../containers/MainLayout';
import { shallow } from 'enzyme';

describe('MainLayout', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainLayout />)
    expect(wrapper).toMatchSnapshot()
  });

  it('responsive drawer starts closed', () => {
    const responsiveDrawer = shallow(<MainLayout />).find('ResponsiveDrawer')
    expect(responsiveDrawer.props().opened).toBe(false)
  });

  it('hamburguer menu hidden', () => {
    const wrapper = shallow(<MainLayout />).find('ResponsiveDrawer')
    const menu = wrapper.find('IconButton')
    expect(menu).toHaveLength(0);
  });
});
