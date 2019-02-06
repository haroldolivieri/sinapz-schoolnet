import { all, fork } from 'redux-saga/effects';
import menuSaga from './menu/sagas'

export default function* rootSaga() {
  yield all([
    fork(menuSaga)
  ]);
}
