import PropTypes from 'prop-types';

import { PeopleIcon, SearchIcon } from '@primer/octicons-react';

import styles from './Button.module.scss';

const Button = ({ onClickButton, contentButton }) => {
  return contentButton ? (
    <button
      className={styles.button}
      type="button"
      aria-label="Search_button"
      onClick={onClickButton}
    >
      <SearchIcon className={styles.button__search_repos} size={36} />
    </button>
  ) : (
    <button
      className={styles.button}
      type="button"
      aria-label="Search_button"
      onClick={onClickButton}
    >
      <PeopleIcon className={styles.button__search_user} size={36} />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
