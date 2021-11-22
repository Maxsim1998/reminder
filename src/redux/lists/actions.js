import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

export const getUsers = createRoutine('users/getUsers');
export const getUsersPromiseCreator = promisifyRoutine(getUsers);

export const setUser = createRoutine('users/setUser');
export const setUserPromiseCreator = promisifyRoutine(setUser);
