import React from 'react';
import SideDrawer from '../components/SideDrawer';
import { shallow } from 'enzyme';

describe('Side Drawer', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SideDrawer/>)
        expect(wrapper).toMatchSnapshot()
    });
});
