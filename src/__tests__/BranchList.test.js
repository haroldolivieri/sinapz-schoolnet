import React from 'react'
import { BranchList, CardDetailsWithAvatar } from '../components'
import { shallow } from 'enzyme'

describe(BranchList, () => {

  context('with empty branch list', () => {
    const wrapper = shallow(<BranchList branches={[]} />)
    
    it('should match with snapshot', () => { expect(wrapper).toMatchSnapshot() })
    it('should has none CardDetails', () => { expect(wrapper.find(CardDetailsWithAvatar)).toHaveLength(0) })
    it('should has warnning text', () => { expect(wrapper.children().text()).toEqual('Essa rede não tem filiais') })
  })

  context('with branch list', () => {
    let branches = [{ id: '1', name: 'madureira', inCharge: 'Hadoldo' }, { id: '2', name: 'Meier', inCharge: 'Paula' }]
    const wrapper = shallow(<BranchList branches={branches} />)

    it('should match with snapshot', () => { expect(wrapper).toMatchSnapshot() })
    it('should has two CardDetails', () => { expect(wrapper.find(CardDetailsWithAvatar)).toHaveLength(2) })
  })
})
