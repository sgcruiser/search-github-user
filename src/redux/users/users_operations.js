import axios from 'axios';

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
} from './users_actions';

const fetchSearchUsers =
  ({ searchQuery }) =>
  async dispatch => {
    dispatch(fetchSearchUsersRequest());

    try {
      const { data } = await axios.get('search/users', {
        params: { q: searchQuery },
      });
      dispatch(fetchSearchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchSearchUsersError(error.message));
    }
  };

const fetchUserDetails = login => async dispatch => {
  dispatch(fetchUserDetailsRequest());

  try {
    const { data } = await axios.get(`users/${login}`);
    dispatch(fetchUserDetailsSuccess(data));
  } catch (error) {
    dispatch(fetchUserDetailsError(error.message));
  }
};

const fetchUserRepositories = login => async dispatch => {
  dispatch(fetchUserRepositoriesRequest());

  try {
    const { data } = await axios.get(`users/${login}/repos`);
    dispatch(fetchUserRepositoriesSuccess(data));
  } catch (error) {
    dispatch(fetchUserRepositoriesError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchSearchUsers, fetchUserDetails, fetchUserRepositories };
