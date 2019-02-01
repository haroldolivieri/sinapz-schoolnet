import React from 'react';
import App from '../containers/App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('responsive drawer starts closed', () => {
    const responsiveDrawer = shallow(<App />).find('ResponsiveDrawer')
    expect(responsiveDrawer.props().opened).toBe(false)
  });

  it('hamburguer menu hidden', () => {
    const wrapper = shallow(<App />).find('ResponsiveDrawer')
    const menu = wrapper.find('IconButton')
    expect(menu).toHaveLength(0);
  });
});
