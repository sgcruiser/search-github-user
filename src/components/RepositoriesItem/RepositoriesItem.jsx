import styles from './RepositoriesItem.module.scss';

const RepositoriesItem = ({ name, forks, stargazers_count, html_url }) => {
  return (
    <div className={styles.repositories}>
      <p className={styles.repositories__name}>{name}</p>
      <ul className={styles.repositories__list}>
        <li className={styles.repositories__item}>
          <span>{forks}</span> Forks
        </li>
        <li className={styles.repositories__item}>
          Stars <span>{stargazers_count}</span>
        </li>
      </ul>
    </div>
  );
};

export default RepositoriesItem;
