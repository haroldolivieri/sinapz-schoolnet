import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    schoolnetInfo: {},
    menuItems: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_MENU_ITEMS:
            return state.set('menuItems', action.items)
        case types.SET_SCHOOLNET_INFO:
            return state.set('schoolnetInfo', action.info)
        default:
            return state
    }
}
