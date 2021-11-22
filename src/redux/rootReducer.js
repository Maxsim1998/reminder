import { combineReducers } from '@reduxjs/toolkit';

function reducer(state, action) {
  return rootReducer(combineReducer(state, action), action);
}

const combineReducer = combineReducers({
  users: require('./lists').reducer,
});

const rootReducer = (state) => state;

export default reducer;
