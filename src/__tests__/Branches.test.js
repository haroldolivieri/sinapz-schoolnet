import React from 'react'
import Branches from '../containers/Branches'
import { shallow } from 'enzyme'

describe(Branches, () => {

  context('with branch list', () => {
    let branches = [{ id: 1, name: 'madureira', inCharge: 'Hadoldo' }, { id: 2, name: 'Meier', inCharge: 'Paula' }]
    const wrapper = shallow(<Branches branches={branches} />)

    it('renders correctlyt', () => { expect(wrapper).toMatchSnapshot() })
  })

  context('with empty branch list', () => {
    const wrapper = shallow(<Branches branches={[]} />)
    
    it('should match with snapshot', () => { expect(wrapper).toMatchSnapshot() })
  })
})
