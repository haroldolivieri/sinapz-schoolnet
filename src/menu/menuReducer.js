import {Map} from 'immutable'
import * as types from './types'

const defaultState = Map({
    selectedItem: "Dasboard"
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SELECT_ITEM:
            return state.set('selectedItem', action.selectedItem)
        default:
            return state
    }
}
