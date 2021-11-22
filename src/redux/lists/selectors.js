import { createSelector } from '@reduxjs/toolkit';

const users = (r) => r.users;
export const usersSelector = createSelector(users, (r) => r.users.users);
export const userSelector = createSelector(users, (r) => r.users.user);
