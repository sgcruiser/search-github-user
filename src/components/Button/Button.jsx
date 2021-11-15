import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClickButton, textButton }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClickButton}>
      {textButton}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
