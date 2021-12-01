import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClickButton, contentButton }) => {
  let stylesVariant;

  contentButton
    ? (stylesVariant = styles.button__Default)
    : (stylesVariant = styles.button__User);

  return (
    <button
      className={stylesVariant}
      type="button"
      onClick={onClickButton}
    ></button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
