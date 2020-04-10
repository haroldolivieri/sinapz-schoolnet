import { put, call, takeLatest, fork} from 'redux-saga/effects'
import { getDashboardIndexes, getDashboardAssesments } from './services'
import {
    LOAD_INITAL_DATA,
    SET_DASHBOARD_INDEXES,
    SET_DASHBOARD_ASSESMENTS
} from './types'

function* fetchInitialData() {
    yield fork(fetchDashboardIndexes)
    yield fork(fetchDashboardAssesments)
}

function* fetchDashboardIndexes() {
    const response = yield call(getDashboardIndexes)
    yield put({ type: SET_DASHBOARD_INDEXES, dashboardIndexes: response })
}

function* fetchDashboardAssesments() {
    const response = yield call(getDashboardAssesments)
    yield put({ type: SET_DASHBOARD_ASSESMENTS, dashboardAssesments: response })
}

export default function* dashboardSaga() {
    yield takeLatest(LOAD_INITAL_DATA, fetchInitialData)
}
