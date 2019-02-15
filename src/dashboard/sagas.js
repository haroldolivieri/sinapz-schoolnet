import { put, call, takeLatest, fork} from 'redux-saga/effects'
import { getDashboardIndices, getDashboardAvaliacoes } from './services'

import {
    LOAD_INITAL_DATA,
    SET_DASHBOARD_INDICES,
    SET_DASHBOARD_AVALIACOES
} from './types'

function* fetchInitialData() {
    console.log('sagas:fetchInitialData')
    yield fork(fetchDashboardIndices)
    yield fork(fetchDashboardAvaliacoes)
}

function* fetchDashboardIndices() {
    console.log('sagas:fetchDashboardIndices')
    const response = yield call(getDashboardIndices)
    console.log('sagas response Indices:')
    console.log(response)
    yield put({ type: SET_DASHBOARD_INDICES, dashboardIndices: response })
}

function* fetchDashboardAvaliacoes() {
    console.log('sagas:fetchDashboardAvaliacoes')
    const response = yield call(getDashboardAvaliacoes)
    console.log('sagas response Avaliacoes:')
    console.log(response)
    yield put({ type: SET_DASHBOARD_AVALIACOES, dashboardAvaliacoes: response })
}

export default function* dashboardSaga() {
    console.log('sagas:dashboardSaga')
    yield takeLatest(LOAD_INITAL_DATA, fetchInitialData)
}
