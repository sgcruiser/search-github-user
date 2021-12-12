import { FaGithubSquare } from 'react-icons/fa';
import { MarkGithubIcon } from '@primer/octicons-react';

import styles from './Logo.module.scss';

export default function Logo({ route }) {
  return route ? (
    <MarkGithubIcon className={styles.logo} size={50} />
  ) : (
    <FaGithubSquare className={styles.logo} size={50} />
  );
}
