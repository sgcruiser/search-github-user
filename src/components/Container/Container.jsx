import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
