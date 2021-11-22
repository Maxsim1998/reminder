import { put, call } from 'redux-saga/effects';
import * as Actions from './actions';

const getUsersApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
};

export function* ensureGetUsers() {
  try {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('users'));
    let data;
    if (dataFromLocalStorage) {
      data = dataFromLocalStorage;
    } else {
      data = yield call(getUsersApi);
      localStorage.setItem('users', JSON.stringify(data));
    }
    yield put(Actions.getUsers.success(data));
  } catch (err) {
    yield put(Actions.getUsers.failure(err));
  }
}

export function* ensureSetUser({ payload } = {}) {
  try {
    yield put(Actions.setUser.success(payload));
  } catch (err) {
    yield put(Actions.setUser.failure(err));
  }
}
