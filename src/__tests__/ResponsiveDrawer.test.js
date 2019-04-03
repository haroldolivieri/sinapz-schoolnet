import React from 'react'
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import { shallow } from 'enzyme'
import { Drawer } from '@material-ui/core'

describe('Responsive Drawer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResponsiveDrawer />)
    expect(wrapper).toMatchSnapshot()
  })

  it('call close method when drawer is closed', () => {
    const onCloseMock = jest.fn()
    const wrapper = shallow(
      <ResponsiveDrawer opened={false} onClose={onCloseMock} />
    )

    wrapper.find(Drawer).simulate('close')

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
