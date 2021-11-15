import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import UserGitHubItem from '../UserGitHubItem';

import styles from './SearchListUsers.module.scss';

const SearchListUsers = ({ usersList }) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        {usersList &&
          usersList.map(({ id, login, avatar_url, repos_url }) => (
            <li key={id} className={styles.item}>
              <Link
                to={{
                  pathname: `${routes.userDetails}/${login}`,
                  state: { login: `${login}` },
                }}
                className={styles.link}
              >
                <UserGitHubItem
                  id={id}
                  login={login}
                  avatar_url={avatar_url}
                  repos_url={repos_url}
                />
              </Link>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

SearchListUsers.defaultProps = {
  login: '',
};

SearchListUsers.propTypes = {
  login: PropTypes.string,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(SearchListUsers);
