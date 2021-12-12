import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { fetchSearchUsers } from '../services/searchUserGitHubApi';
import SearchForm from '../components/SearchForm';
import SearchListUsers from '../components/SearchListUsers';
import Loader from '../components/Loader';

class SearchUsersPage extends Component {
  state = {
    users: [],
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    const { query } = queryString.parse(search);

    if (search && pathname) {
      this.setState({
        searchQuery: query,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getUsers();
    }
  }

  onChangeQuery = query => {
    this.setState({
      users: [],
      searchQuery: query,
      error: null,
    });

    this.props.history.push({
      search: `query=${query}`,
    });
  };

  async getUsers() {
    const { searchQuery } = this.state;
    const arg = { searchQuery };

    if (arg) {
      this.setState({ isLoading: true });

      await fetchSearchUsers(arg)
        .then(data => {
          this.setState({ users: data.items });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { users, isLoading, error } = this.state;

    return (
      <main>
        <SearchForm
          onSubmit={this.onChangeQuery}
          textPlaceholder="Search for Users"
        />

        {error && (
          <error>
            <p>Произошла ошибка, повторите запрос...</p>
          </error>
        )}

        <SearchListUsers usersList={users} />

        {isLoading && <Loader />}
      </main>
    );
  }
}

export default withRouter(SearchUsersPage);
