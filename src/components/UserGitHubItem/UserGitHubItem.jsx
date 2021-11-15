import PropTypes from 'prop-types';
import defaultImage from '../UserGitHub/avatar_default_2.png';
import styles from './UserGitHubItem.module.scss';

const UserGitHubItem = ({ id, login, avatar_url, repos_url }) => {
  const avatarUrl = avatar_url
    ? `https://avatars.githubusercontent.com/u/${id}?v=4`
    : defaultImage;

  const quantityRepos = `https://api.github.com/users/${login}/repos`.length;

  return (
    <div className={styles.usersItem}>
      <div className={styles.usersItem__tumb}>
        <img src={avatarUrl} alt={login} className={styles.usersItem__img} />
      </div>
      <p className={styles.usersItem__login}>
        <span>{login}</span>
      </p>
      <p className={styles.usersItem__repos}>
        Repo:<span> {quantityRepos}</span>
      </p>
    </div>
  );
};

UserGitHubItem.defaultProps = {
  avatar_url: defaultImage,
  login: 'noname',
};

UserGitHubItem.propTypes = {
  avatar_url: PropTypes.string,
  login: PropTypes.string,
};

export default UserGitHubItem;
