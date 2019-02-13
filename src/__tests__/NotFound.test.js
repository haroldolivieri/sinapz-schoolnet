import React from 'react'
import NotFound from '../components/NotFound'
import { shallow } from 'enzyme'

describe('NotFound', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<NotFound />)
        expect(wrapper).toMatchSnapshot()
    })
})
