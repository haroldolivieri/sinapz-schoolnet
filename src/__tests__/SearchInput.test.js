import React from 'react'
import { SearchInput, SearchResultItem } from '../containers/SearchInput'
import { shallow } from 'enzyme'
import { TextField } from '@material-ui/core'

const results = [
    {
        id: '1',
        type: 'TEACHER',
        name: 'Osnir',
        description: 'Professor de Geografia',
        photoUrl: ''
    },
    {
        id: '1',
        type: 'BRANCH',
        name: 'Tijuca',
        description: 'Filial da Tijuca',
        photoUrl: ''
    }
]

jest.useFakeTimers();

describe('SearchInput', () => {
    it('renders correctly for empty results', () => {
        const wrapper = shallow(<SearchInput fetchSearchResults={() => {}} results={[]} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly for existing results', () => {
        const wrapper = shallow(<SearchInput fetchSearchResults={() => {}} results={results} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders the right amount of result items', () => {
        const wrapper = shallow(<SearchInput fetchSearchResults={() => {}} results={results} />)
        
        expect(wrapper.find(SearchResultItem)).toHaveLength(2)
    })

    it('call action on text changed', () => {
        const mockAction = jest.fn()
        const wrapper = shallow(<SearchInput fetchSearchResults={mockAction} results={[]} />)
        
        //before debounce
        wrapper.find(TextField).simulate('change', {
            target: { value: 'O' }
        })
        wrapper.find(TextField).simulate('change', {
            target: { value: 'Os' }
        })
        wrapper.find(TextField).simulate('change', {
            target: { value: 'Osn' }
        })
        jest.runAllTimers();

        expect(mockAction.mock.calls.length).toBe(1)
    })

    it('call action to clear state after click on item', () => {
        const mockAction = jest.fn()
        const wrapper = shallow(<SearchInput fetchSearchResults={mockAction} results={[]} />)

        wrapper.find(TextField).simulate('blur')
        
        expect(mockAction.mock.calls.length).toBe(1)
    })
})
