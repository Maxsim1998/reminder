import { createReducer } from '@reduxjs/toolkit';
import * as Actions from './actions.js';
import initialState from '../initialState';

const users = createReducer(initialState.users, {
  [Actions.getUsers.SUCCESS]: (state, action) => {
    state.users.users = action.payload;
  },
  [Actions.setUser.SUCCESS]: (state, action) => {
    state.users.user = action.payload;
  },
});

export { users as reducer };
