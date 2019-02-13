import React from 'react'
import { SinapzCard } from '../components'
import { createShallow } from '@material-ui/core/test-utils'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

describe(SinapzCard, () => {

  context('with branch Meier', () => {
    let shallow = createShallow({ dive: true })
    let branch = { id: 2, name: 'Meier', inCharge: 'Paula' }
    const wrapper = shallow(<SinapzCard branch={branch} />)
    
    it('should match with snapshot', () => { expect(wrapper).toMatchSnapshot() })
    it('should has CardHeader', () => { expect(wrapper.find(CardHeader)).toHaveLength(1) })
    it('should has CardContent with Meier text', () => {
      expect(wrapper.find(CardContent).find('.SinapzCard-title-2').children().text()).toEqual('Meier') 
    })
    it('should has CardContent with Paula text', () => {
      expect(wrapper.find(CardContent).find('.SinapzCard-inCharge-3').children().text()).toEqual('Paula') 
    })
    it('should has Avatar', () => { expect(wrapper.find(Avatar)).toBeDefined() })
  })
})
