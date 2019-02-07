import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { MainLayout } from '../containers/MainLayout'
import { shallow } from 'enzyme'
import { ResponsiveDrawer } from '../components'

let wrapper = shallow(<MainLayout loadInitalData={function() {}} />)

describe('MainLayout', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    describe('ResponsiveDrawer', () => {
        let responsiveDrawer
        beforeEach(() => (responsiveDrawer = wrapper.find(ResponsiveDrawer)))

        it('starts closed', () => {
            responsiveDrawer = wrapper.find(ResponsiveDrawer)
            expect(responsiveDrawer.props().opened).toBe(false)
        })
    })

    describe('Toolbar', () => {
        let toolbar
        beforeEach(() => (toolbar = wrapper.find('.toolbar')))

        it('hamburguer has .only-mobile class', () => {
            expect(toolbar.find(MenuIcon).hasClass('only-mobile')).toBeTruthy()
        })

        it('has logo', () => {
            expect(toolbar.find('.logo').exists()).toBeTruthy()
        })

        it('has search input', () => {
            expect(toolbar.find('.search').exists()).toBeTruthy()
        })
    })
})
