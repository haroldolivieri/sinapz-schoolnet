import { Map } from 'immutable'
import * as types from './types'

const defaultState = Map({
    dashboardIndexes: [],
    dashboardAssesments: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_DASHBOARD_INDEXES:
            return state.set('dashboardIndexes', action.dashboardIndexes)
        case types.SET_DASHBOARD_ASSESMENTS:
            return state.set('dashboardAssesments', action.dashboardAssesments)
        default:
            return state
    }
}
