import React from 'react';
import { MainLayout } from '../containers/MainLayout';
import { shallow } from 'enzyme';
import { ResponsiveDrawer } from '../components';

let wrapper = shallow(<MainLayout loadInitalData={function () { }} />)

describe('MainLayout', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('responsive drawer starts closed', () => {
    const responsiveDrawer = wrapper.find(ResponsiveDrawer)

    expect(responsiveDrawer.props().opened).toBe(false)
  });
});
