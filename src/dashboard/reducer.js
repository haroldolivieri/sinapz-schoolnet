import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    dashboardIndices: [],
    dashboardAvaliacoes: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_DASHBOARD_ITEMS:
            console.log('reducer')
            return state.set('dashboardIndices', action.dashboardIndices)
        case types.SET_AVALIACOES_ITEMS:
            return state.set('dashboardAvaliacoes', action.dashboardAvaliacoes)
        default:
            return state
    }
}
