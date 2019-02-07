import * as types from './types'

export const searchInputChanged = searchQuery => ({
    type: types.SEARCH_INPUT_CHANGED,
    searchQuery
})
