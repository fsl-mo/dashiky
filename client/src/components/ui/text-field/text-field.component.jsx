import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './text-field.styles.scss';

const TextField = props => {
  const {
    name,
    id,
    type = 'text',
    value = '',
    onChange,
    placeholder = '',
    disabled,
    className,
    autoComplete,
    size,
    error = false,
    iconElement: Icon,
  } = props;

  return (
    <div
      className={clsx(
        'text-field',
        disabled && 'disabled',
        error && 'error',
        size,
        className
      )}
    >
      {Icon && <Icon className="text-field__icon" />}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className="text-field__input"
      />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'new-password']),
  size: PropTypes.oneOf(['medium', 'small']),
  iconElement: PropTypes.elementType,
};
export default TextField;
