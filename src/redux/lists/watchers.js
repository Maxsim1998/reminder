import { takeLatest } from 'redux-saga/effects';
import * as A from './actions';
import * as E from './workers';

export function* watchGetUsers() {
  yield takeLatest(A.getUsers.TRIGGER, E.ensureGetUsers);
}

export function* watchSetUser() {
  yield takeLatest(A.setUser.TRIGGER, E.ensureSetUser);
}
