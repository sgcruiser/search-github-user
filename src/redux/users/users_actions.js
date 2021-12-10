import { createAction } from '@reduxjs/toolkit';

export const fetchSearchUsersRequest = createAction(
  'users/fetchSearchUsersRequest,',
);
export const fetchSearchUsersSuccess = createAction(
  'users/fetchSearchUsersSuccess,',
);
export const fetchSearchUsersError = createAction(
  'users/fetchSearchUsersError,',
);

export const fetchUserDetailsRequest = createAction(
  'users/fetchUserDetailsRequest,',
);
export const fetchUserDetailsSuccess = createAction(
  'users/fetchUserDetailsSuccess,',
);
export const fetchUserDetailsError = createAction(
  'users/fetchUserDetailsError,',
);

export const fetchUserRepositoriesRequest = createAction(
  'users/fetchUsersRepositoriesRequest,',
);
export const fetchUserRepositoriesSuccess = createAction(
  'users/fetchUsersRepositoriesSuccess,',
);
export const fetchUserRepositoriesError = createAction(
  'users/fetchUsersRepositoriesError,',
);

export const changeFilter = createAction('users/changeFilter');
