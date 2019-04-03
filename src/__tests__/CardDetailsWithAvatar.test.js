import React from 'react'
import { CardDetailsWithAvatar } from '../components'
import { createShallow } from '@material-ui/core/test-utils'
import Avatar from '@material-ui/core/Avatar'

describe(CardDetailsWithAvatar, () => {

  describe('with branch Meier', () => {
    let shallow = createShallow({ dive: true })
    let branch = { id: '2', name: 'Meier', inCharge: 'Paula' }
    const wrapper = shallow(<CardDetailsWithAvatar branch={branch} />)
    
    it('should match with snapshot', () => { expect(wrapper).toMatchSnapshot() })
    it('should has branch name Meier', () => {
      expect(wrapper.find('.content-item').find('.item-card-text-name').text()).toEqual('Meier')
    })
    it('should has incharge name Paula', () => {
      expect(wrapper.find('.content-item').find('.item-card-text-sub').text()).toEqual('Responsável: Paula')
    })
    it('should has Avatar', () => { expect(wrapper.find(Avatar)).toBeDefined() })
  })
})
