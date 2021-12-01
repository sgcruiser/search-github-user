import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultImage from '../../images/avatar_default_2.png';

import styles from './UserGitHub.module.scss';

const UserGitHub = data => {
  const {
    login,
    avatar_url,
    email,
    location,
    created_at,
    followers,
    following,
    bio,
  } = data.user;

  const avatarUrl = avatar_url ? avatar_url : defaultImage;

  const createdAt = `${created_at}`.slice(0, 10);

  return (
    <Fragment>
      <div className={styles.userCard}>
        <img
          src={avatarUrl}
          alt={login}
          title={login}
          className={styles.userCard__img}
        />

        <div className={styles.userCard__contain}>
          <h3 className={styles.userCard__login}>{login}</h3>

          <ul className={styles.userCard__list}>
            <li className={styles.userCard__item}>
              <p className={styles.userCard__email}>Email : {email}</p>
            </li>
            <li className={styles.userCard__item}>
              <p className={styles.userCard__location}>Location : {location}</p>
            </li>
            <li className={styles.userCard__item}>
              <p className={styles.userCard__createdAt}>
                Join Date : {createdAt}
              </p>
            </li>
            <li className={styles.userCard__item}>
              <p className={styles.userCard__followers}>
                {followers} Followers
              </p>
            </li>
            <li className={styles.userCard__item}>
              <p className={styles.userCard__following}>
                Following {following}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.userCard__bio}>{bio}</p>
      </div>
    </Fragment>
  );
};

UserGitHub.defaultProps = {
  avatar_url: defaultImage,
  created_at: 'XXXX-XX-XX',
  email: 'no mail',
  bio: 'This is their biography.',
};

UserGitHub.propTypes = {
  login: PropTypes.string,
  avatar_url: PropTypes.string,
  email: PropTypes.string,
  created_at: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  bio: PropTypes.string,
};

export default withRouter(UserGitHub);
