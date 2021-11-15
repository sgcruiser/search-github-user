import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Logo from './github-tile.svg';

import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <div className={styles.navi}>
      <NavLink
        className={styles.button}
        activeClassName={styles.buttonActive}
        to={routes.search}
      >
        <img
          src={Logo}
          alt="Logo"
          width="50"
          height="50"
          className={styles.logo}
        />
      </NavLink>
      <h1 className={styles.searchTitle}>GitHub Searcher</h1>
    </div>
  );
};

export default Navigation;
