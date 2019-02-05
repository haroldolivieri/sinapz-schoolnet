import { all } from 'redux-saga/effects';
import menuSaga from './menu/sagas'

export default function* rootSaga() {
  yield all([
    menuSaga
  ]);
}
