/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './button.styles.scss';

const Button = ({
  id,
  type = 'button',
  variant,
  disabled = false,
  size,
  className,
  children,
  onClick,
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={clsx('button', variant, size, className)}
  >
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'dark', 'light']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
