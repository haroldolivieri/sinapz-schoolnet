import { put, call, takeLatest, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { getMenuItems, getSchoolnetInfo } from './services'

import {
    LOAD_INITAL_DATA,
    SELECT_ITEM_FROM_MENU,
    SET_MENU_ITEMS,
    SET_SCHOOLNET_INFO
} from './types'

function* fetchInitialData() {
    yield fork(fetchMenuItems)
    yield fork(fetchSchoolnetInfo)
}

function* fetchMenuItems() {
    const response = yield call(getMenuItems)
    yield put({ type: SET_MENU_ITEMS, items: response })
}

function* fetchSchoolnetInfo() {
    const response = yield call(getSchoolnetInfo)
    yield put({ type: SET_SCHOOLNET_INFO, info: response })
}

function* navigateToSelectedItem(action) {
    yield put(push(action.pathTo))
}

export default function* menuSaga() {
    yield takeLatest(LOAD_INITAL_DATA, fetchInitialData)
    yield takeLatest(SELECT_ITEM_FROM_MENU, navigateToSelectedItem)
}
