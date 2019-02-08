import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    searchResults: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SEARCH_RESULTS:
            return state.set('searchResults', action.searchResults)
        default:
            return state
    }
}