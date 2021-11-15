import axios from 'axios';

const API_KEY = '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';
const BASE_URL = 'https://api.github.com/';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: API_KEY,
};

const fetchSearchUsers = async ({ searchQuery }) => {
  return await axios
    .get('search/users', { params: { q: searchQuery } })
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchUserDetails = async login => {
  return await axios
    .get(`users/${login}`)
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

const fetchUsersRepositories = async login => {
  return await axios
    .get(`users/${login}/repos`)
    .then(({ data }) => data)
    .catch(error =>
      console.error(error, 'The resource you requested could not be found.'),
    );
};

export { fetchSearchUsers, fetchUsersRepositories, fetchUserDetails };
