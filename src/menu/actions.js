import * as types from './types'

export const loadInitalData = () => ({
    type: types.LOAD_INITAL_DATA
})

export const selectItem = pathTo => ({
    type: types.SELECT_ITEM_FROM_MENU,
    pathTo
})
