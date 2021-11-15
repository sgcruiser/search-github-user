import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RepositoriesItem from '../RepositoriesItem';

import styles from './SearchListRepositories.module.scss';

const SearchListRepositories = ({ repositoriesList }) => {
  return (
    <Fragment>
      <ul className={styles.repos__list}>
        {repositoriesList &&
          repositoriesList.map(
            ({ id, name, html_url, forks, stargazers_count }) => (
              <li key={id} className={styles.repos__item}>
                <Link
                  to={{
                    pathname: `${html_url}`,
                  }}
                  target="_blank"
                >
                  <RepositoriesItem
                    id={id}
                    name={name}
                    forks={forks}
                    stargazers_count={stargazers_count}
                    html_url={html_url}
                  />
                </Link>
              </li>
            ),
          )}
      </ul>
    </Fragment>
  );
};

SearchListRepositories.defaultProps = {};

SearchListRepositories.propTypes = {
  repositoriesList: PropTypes.array,
};

export default SearchListRepositories;
