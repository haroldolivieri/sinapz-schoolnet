import { put, call, takeLatest } from 'redux-saga/effects'
import { fetchSearch } from './services'

import { FETCH_SEARCH_RESULTS, SEARCH_RESULTS } from './types'

function* fetchSearchSaga(action) {
    const response = yield call(fetchSearch, action.searchQuery)
    yield put({ type: SEARCH_RESULTS, searchResults: response })
}

export default function* searchBarSaga() {
    yield takeLatest(FETCH_SEARCH_RESULTS, fetchSearchSaga)
}
