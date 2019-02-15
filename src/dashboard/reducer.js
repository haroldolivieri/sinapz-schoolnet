import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    dashboardIndices: [],
    dashboardAvaliacoes: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_DASHBOARD_INDICES:
            console.log('Reducer: SET_DASHBOARD_INDICES')
            return state.set('dashboardIndices', action.dashboardIndices)
        case types.SET_DASHBOARD_AVALIACOES:
            console.log('Reducer: SET_DASHBOARD_AVALIACOES')
            return state.set('dashboardAvaliacoes', action.dashboardAvaliacoes)
        default:
            return state
    }
}
