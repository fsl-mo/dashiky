/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './button.styles.scss';

const Button = ({
  type = 'button',
  variant,
  size,
  className,
  children,
  onClick,
  iconElement: Icon,
  ...otherProps
}) => (
  <button
    type={type}
    onClick={onClick}
    className={clsx('button', variant, size, className)}
    {...otherProps}
  >
    {Icon && <Icon className="button-icon" />}
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'dark', 'light']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  children: PropTypes.any,
  onClick: PropTypes.func,
  iconElement: PropTypes.elementType,
};

export default Button;
