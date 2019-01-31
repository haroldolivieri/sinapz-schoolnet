import React from 'react';
import ResponsiveDrawer from '../ResponsiveDrawer';
import { shallow } from 'enzyme';

describe('Responsive Drawer', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ResponsiveDrawer
            navDrawerOpened={false}
            toggleDrawer={jest.fn()}
        />)
        expect(wrapper).toMatchSnapshot()
    });

    it('call close method when drawer is closed', () => {
        const onCloseMock = jest.fn();
        const wrapper = shallow(
            <ResponsiveDrawer
                navDrawerOpened={false}
                toggleDrawer={onCloseMock}
            />,
        );

        wrapper.find('#drawer').simulate('close');

        expect(onCloseMock).toHaveBeenCalledTimes(1);
        expect(onCloseMock).toHaveBeenCalledWith(false);
    });
});
