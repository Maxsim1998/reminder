import { all, fork } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { usersRoot } from './lists';

export default function* rootSaga() {
  yield all([
    fork(routinePromiseWatcherSaga),
    fork(usersRoot),
  ]);
}
