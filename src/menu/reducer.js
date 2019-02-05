import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    schollnetInfo: {},
    menuItems: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.LOAD_INITAL_DATA:
            console.log('initial data reducer')
            return state
        case types.SELECT_ITEM_FROM_MENU:
            return state.set('selectedItem', action.selectedItem)
        case types.SET_MENU_ITEMS:
            return state.set('menuItems', action.items)
        case types.SET_SCHOOLNET_INFO:
            return state.set('schollnetInfo', action.info)
        default:
            return state
    }
}
