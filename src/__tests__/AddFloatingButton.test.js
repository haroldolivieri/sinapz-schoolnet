import React from 'react'
import { shallow } from 'enzyme'
import { AddFloatingButton } from '../containers/AddFloatingButton'
import { Fab } from '@material-ui/core'

describe('AddFloatingButton', () => {
    let actionFirstItem
    let actionSecondItem
    let actionThirdItem
    let items
    beforeEach(() => (actionFirstItem = jest.fn()))
    beforeEach(() => (actionSecondItem = jest.fn()))
    beforeEach(() => (actionThirdItem = jest.fn()))
    beforeEach(
        () =>
            (items = [
                {
                    text: 'Adicionar Evento',
                    action: actionFirstItem
                },
                {
                    text: 'Adicionar Filial',
                    action: actionSecondItem
                },
                {
                    text: 'Adicionar Professor',
                    action: actionThirdItem
                }
            ])
    )

    describe('renders', () => {
        let wrapper
        beforeEach(
            () => (wrapper = shallow(<AddFloatingButton popupItems={items} />))
        )

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot()
        })

        it('renders correctly after click', () => {
            wrapper.find(Fab).simulate('click')
            expect(wrapper).toMatchSnapshot()
        })
    })

    describe('has only one item', () => {
        let wrapper
        beforeEach(
            () =>
                (wrapper = shallow(
                    <AddFloatingButton popupItems={[items[0]]} />
                ))
        )

        it('click on fab should call first item action', () => {
            wrapper.find(Fab).simulate('click')

            expect(actionFirstItem).toHaveBeenCalledTimes(1)
        })

        it('click on fab item should not open popup', () => {
            wrapper.find(Fab).simulate('click')

            expect(wrapper.state().open).toBeFalsy()
        })
    })

    describe('has more than one item', () => {
        let wrapper
        beforeEach(
            () => (wrapper = shallow(<AddFloatingButton popupItems={items} />))
        )

        it('click on fab should not call first item action', () => {
            wrapper.find(Fab).simulate('click')

            expect(actionFirstItem).toHaveBeenCalledTimes(0)
        })

        it('click on fab should open popup', () => {
            wrapper.find(Fab).simulate('click')

            expect(wrapper.state().open).toBeTruthy()
        })
    })
})
