import { put, call, takeLatest, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { getMenuItems, getSchoolnetInfo } from './services'

import {
  LOAD_INITAL_DATA,
  SELECT_ITEM_FROM_MENU,
  SET_MENU_ITEMS,
  SET_SCHOOLNET_INFO
} from './types'

function* fetchInitialDataSaga() {
  yield fork(fetchMenuItemsSaga)
  yield fork(fetchSchoolnetInfoSaga)
}

function* fetchMenuItemsSaga() {
  const response = yield call(getMenuItems)
  yield put({ type: SET_MENU_ITEMS, items: response })
}

function* fetchSchoolnetInfoSaga() {
  const response = yield call(getSchoolnetInfo)
  yield put({ type: SET_SCHOOLNET_INFO, info: response })
}

function* navigateToSelectedItemSaga(action) {
  yield put(push(action.pathTo))
}

export default function* menuSaga() {
  yield takeLatest(LOAD_INITAL_DATA, fetchInitialDataSaga)
  yield takeLatest(SELECT_ITEM_FROM_MENU, navigateToSelectedItemSaga)
}
