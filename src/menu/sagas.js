import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { getMenuItems, getSchoolnetInfo } from './services'
import { setMenuItems, setSchoolnetInfo } from './actions'
import { LOAD_INITAL_DATA, SELECT_ITEM_FROM_MENU } from './types'

function* fetchInitialData() {
    console.log("inital data saga")
    const response = yield call(getMenuItems)
    yield put(setMenuItems(response))
    fetchSchoolnetInfo()
}

function* fetchSchoolnetInfo() {
    const response = yield call(getSchoolnetInfo)
    yield put(setSchoolnetInfo(response))
}

function* navigateToSelectedItem(action) {
    yield put(push(action.pathTo))
}

export default [
    takeLatest(LOAD_INITAL_DATA, fetchInitialData),
    takeLatest(SELECT_ITEM_FROM_MENU, navigateToSelectedItem)
]