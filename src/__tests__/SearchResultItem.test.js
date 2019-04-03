import React from 'react'
import { SearchResultItem } from '../containers/SearchInput'
import { shallow } from 'enzyme'
import { ListItem } from '@material-ui/core'

describe('SearchResultItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchResultItem />)
    expect(wrapper).toMatchSnapshot()
  })

  it('show correct date for respective fields', () => {
    let name = 'John Doe'
    let description = 'Unknown person'
    let photoUrl =
            'https://cdn.shopify.com/s/files/1/0539/4361/products/anonymous-guy-fawkes-anarchy-decal.jpg?v=1410346765'
    const wrapper = shallow(
      <SearchResultItem
        name={name}
        description={description}
        photoUrl={photoUrl}
      />
    )

    expect(wrapper.find('img').prop('src')).toEqual(photoUrl)
    expect(wrapper.find('img').prop('alt')).toEqual(name)
    expect(wrapper.find('.result-name').text()).toEqual(name)
    expect(wrapper.find('.result-description').text()).toEqual(description)
  })

  it('call action on click', () => {
    const mockAction = jest.fn()
    const wrapper = shallow(<SearchResultItem onClick={mockAction} />)

    wrapper.find(ListItem).simulate('click')

    expect(mockAction.mock.calls).toHaveLength(1)
  })

  it('call close action on click', () => {
    const mockClose = jest.fn()
    const wrapper = shallow(<SearchResultItem onClose={mockClose} />)

    wrapper.find(ListItem).simulate('click')

    expect(mockClose.mock.calls).toHaveLength(1)
  })
})
