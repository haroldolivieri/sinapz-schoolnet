import { all, fork } from 'redux-saga/effects'
import menuSaga from './menu/sagas'
import searchBarSaga from './searchbar/sagas'
import dashboardSaga from './dashboard/sagas'

export default function* rootSaga() {
    yield all([
        fork(menuSaga), 
        fork(searchBarSaga), 
        fork(dashboardSaga),
    ])
}
