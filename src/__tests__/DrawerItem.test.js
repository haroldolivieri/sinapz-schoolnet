import React from 'react'
import { DrawerItem } from '../components/SideDrawer'
import { shallow } from 'enzyme'
import { ListItem } from '@material-ui/core'

describe('Drawer Item', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DrawerItem />)
    expect(wrapper).toMatchSnapshot()
  })

  it('call right action method when item is clicked', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<DrawerItem action={onClickMock} />)

    wrapper.find(ListItem).simulate('click')

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
