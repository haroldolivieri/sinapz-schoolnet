import { put, call, takeLatest, fork} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { getDashboardIndices, getDashboardAvaliacoes } from './services'

import {
    LOAD_INITAL_DATA,
    SET_DASHBOARD_INDICES,
    SET_DASHBOARD_AVALIACOES
} from './types'

function* fetchInitialData() {
    yield fork(fetchDashboardIndices)
    yield fork(fetchDashboardAvaliacoes)
}

function* fetchDashboardIndices() {
    const response = yield call(getDashboardIndices)
    yield put({ type: SET_DASHBOARD_INDICES, indices: response })
}

function* fetchDashboardAvaliacoes() {
    const response = yield call(getDashboardAvaliacoes)
    yield put({ type: SET_DASHBOARD_AVALIACOES, avaliacoes: response })
}

export default function* dashboardSaga() {
    yield takeLatest(LOAD_INITAL_DATA, fetchInitialData)
}
