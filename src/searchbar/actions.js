import * as types from './types'

export const fetchSearchResults = searchQuery => ({
    type: types.FETCH_SEARCH_RESULTS,
    searchQuery
})
