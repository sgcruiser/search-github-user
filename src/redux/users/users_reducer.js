import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchSearchUsersRequest,
  fetchSearchUsersSuccess,
  fetchSearchUsersError,
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsError,
  fetchUserRepositoriesRequest,
  fetchUserRepositoriesSuccess,
  fetchUserRepositoriesError,
  changeFilter,
} from './users_actions';

const sortId = payload => payload.sort((a, b) => a.name.localeCompare(b.name));

// const filterId = (state, payload) => state.filter(({ id }) = id !== payload);

const items = createReducer([], {
  [fetchSearchUsersRequest]: (_, { payload }) => sortId(payload),
  [fetchUserDetailsRequest]: (state, { payload }) => [...state, payload],
  [fetchUserRepositoriesRequest]: (state, { payload }) => [...state, payload],
});

const setTrue = () => true;
const setFalse = () => false;

const loading = createReducer(false, {
  [fetchSearchUsersRequest]: setTrue,
  [fetchSearchUsersSuccess]: setFalse,
  [fetchSearchUsersError]: setFalse,
  [fetchUserDetailsRequest]: setTrue,
  [fetchUserDetailsSuccess]: setFalse,
  [fetchUserDetailsError]: setFalse,
  [fetchUserRepositoriesRequest]: setTrue,
  [fetchUserRepositoriesSuccess]: setFalse,
  [fetchUserRepositoriesError]: setFalse,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(false, {
  [fetchSearchUsersRequest]: setFalse,
  [fetchSearchUsersSuccess]: setFalse,
  [fetchSearchUsersError]: setTrue,
  [fetchUserDetailsRequest]: setFalse,
  [fetchUserDetailsSuccess]: setFalse,
  [fetchUserDetailsError]: setTrue,
  [fetchUserRepositoriesRequest]: setFalse,
  [fetchUserRepositoriesSuccess]: setFalse,
  [fetchUserRepositoriesError]: setTrue,
});

export default combineReducers({ items, loading, filter, error });
