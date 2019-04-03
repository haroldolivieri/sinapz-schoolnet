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

jest.useFakeTimers()

describe('SearchInput', () => {
  it('renders correctly for empty results', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={[]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly for existing results', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={results} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('starts with results dialog closed', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={results} />
    )

    expect(wrapper.state().searchResultsOpened).toBeFalsy()
  })

  it('renders the right amount of result items', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={results} />
    )

    wrapper.setState({ searchResultsOpened: true })

    expect(wrapper.find(SearchResultItem)).toHaveLength(2)
  })

  it('call action on text changed', () => {
    const mockAction = jest.fn()
    const wrapper = shallow(
      <SearchInput fetchSearchResults={mockAction} results={[]} />
    )

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
    jest.runAllTimers()

    expect(mockAction.mock.calls).toHaveLength(1)
  })

  it('should show dialog is toggled if onBlur is tapped', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={[]} />
    )
    wrapper.setState({ searchResultsOpened: true })

    wrapper.find(TextField).simulate('blur')

    expect(wrapper.state().searchResultsOpened).toBeFalsy()
  })

  it('should show dialog is toggled if onFocus is tapped', () => {
    const wrapper = shallow(
      <SearchInput fetchSearchResults={() => {}} results={[]} />
    )
    wrapper.setState({ searchResultsOpened: false })

    wrapper.find(TextField).simulate('focus')

    expect(wrapper.state().searchResultsOpened).toBeTruthy()
  })
})
