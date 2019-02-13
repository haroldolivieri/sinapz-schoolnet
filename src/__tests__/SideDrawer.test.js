import React from 'react'
import { SideDrawer, DrawerItem } from '../components/SideDrawer'
import { shallow, mount } from 'enzyme'
import { createMemoryHistory } from 'history'

let items = [
    {
        name: 'Dashboard',
        icon: 'dashboard.svg',
        path: '/'
    },
    {
        name: 'Agenda',
        icon: 'undefined.svg',
        path: '/agenda'
    }
]

let history = createMemoryHistory('/')

describe('Side Drawer', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <SideDrawer menuItems={items} history={history} />
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('renders item', () => {
        const wrapper = shallow(
            <SideDrawer menuItems={items} history={history} />
        )
        const firstItemWrapper = wrapper.find(DrawerItem).get(0)

        expect(firstItemWrapper.props.text).toEqual(items[0].name)
    })

    it('navigates on click', () => {
        const historyMock = { push: jest.fn() }
        const wrapper = mount(
            <SideDrawer menuItems={items} history={historyMock} />
        )

        shallow(wrapper.find(DrawerItem).get(0)).simulate('click')

        //called once
        expect(historyMock.push.mock.calls.length).toBe(1)
        //validate the first argument of the first call
        expect(historyMock.push.mock.calls[0][0]).toEqual(items[0].path)
    })

    it('navigates on subsequent calls', () => {
        const historyMock = { push: jest.fn() }
        const wrapper = mount(
            <SideDrawer menuItems={items} history={historyMock} />
        )

        shallow(wrapper.find(DrawerItem).get(0)).simulate('click')
        shallow(wrapper.find(DrawerItem).get(1)).simulate('click')

        //called twice
        expect(historyMock.push.mock.calls.length).toBe(2)
        //validate the first argument of both call
        expect(historyMock.push.mock.calls[0][0]).toEqual(items[0].path)
        expect(historyMock.push.mock.calls[1][0]).toEqual(items[1].path)
    })
})
