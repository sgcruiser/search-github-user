// import { createSelector } from '@reduxjs/toolkit';

const getUsers = state => state.users.items;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
  getLoading,
  getFilter,
  getError,
};
