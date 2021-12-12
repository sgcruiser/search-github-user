import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Logo from '../Logo';
import LogoDefault from '../../images/githubTitle.svg';

import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <div className={styles.navi}>
      <NavLink
        className={styles.button}
        activeClassName={styles.buttonActive}
        to={routes.search}
      >
        {(Logo && <Logo route={routes} />) || (
          <img src={LogoDefault} alt="Logo" className={styles.navi__logo} />
        )}
      </NavLink>
      <h1 className={styles.navi__searchTitle}>GitHub Searcher</h1>
    </div>
  );
};

export default Navigation;
