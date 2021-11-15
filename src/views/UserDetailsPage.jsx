import { Component } from 'react';
import PropTypes from 'prop-types';

import routes from '../routes';
import { withRouter } from 'react-router-dom';
import {
  fetchUserDetails,
  fetchUsersRepositories,
} from '../services/searchUserGitHubApi';

import SearchForm from '../components/SearchForm';
import SearchListRepositories from '../components/SearchListRepositories';
import UserGitHub from '../components/UserGitHub';
import Loader from '../components/Loader';

class UsersDetailsPage extends Component {
  state = {
    user: {},
    repositories: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { login } = this.props.location.state;
    this.getUserDetails(login);
    this.getRepositories(login);
    console.log(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { login } = this.props.location.state;

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchUsersRepositories(login);
    }
  }

  onChangeQuery = query => {
    this.setState({
      repositories: [],
      searchQuery: query,
      error: null,
    });
  };

  filterRepos(data) {
    const { searchQuery } = this.state;
    const arg = { searchQuery };

    const arrayQuery = data.filter(
      ({ name }) => name.indexOf(arg.searchQuery) !== -1,
    );

    return arrayQuery;
  }

  async getUserDetails(login) {
    this.setState({ isLoading: true });

    await fetchUserDetails(login)
      .then(data => {
        this.setState({ user: data });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  async getRepositories(login) {
    this.setState({ isLoading: true });

    await fetchUsersRepositories(login)
      .then(data => {
        this.setState({ repositories: data });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  async searchUsersRepositories(login) {
    this.setState({ isLoading: true });

    await fetchUsersRepositories(login)
      .then(data => {
        const reposFilter = this.filterRepos(data);
        this.setState({ repositories: reposFilter });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.search);
  };

  render() {
    const { user, repositories, isLoading, error } = this.state;

    return (
      <main>
        {user && <UserGitHub user={user} />}

        <SearchForm
          onSubmit={this.onChangeQuery}
          textPlaceholder="Search for User's Repositories"
        />
        {error && (
          <error>
            <p>Произошла ошибка, повторите запрос...</p>
          </error>
        )}
        <SearchListRepositories repositoriesList={repositories} />
        {isLoading && <Loader />}
      </main>
    );
  }
}

UsersDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object,
  repositories: PropTypes.array,
};

export default withRouter(UsersDetailsPage);
