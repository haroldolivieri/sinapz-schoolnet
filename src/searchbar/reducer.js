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

function sortItems(items) {
    let byName = items.slice(0)
    byName.sort(function(a, b) {
        var x = a.name.toLowerCase()
        var y = b.name.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
    })
}
