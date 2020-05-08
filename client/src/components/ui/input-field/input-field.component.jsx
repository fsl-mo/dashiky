import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './input-field.styles.scss';

const InputField = props => {
  const {
    id,
    name,
    type = 'text',
    value = '',
    onChange,
    className,
    size,
    label,
    disabled = false,
    error = false,
    errorText = '',
    iconElement: Icon,
    ...otherProps
  } = props;

  return (
    <div
      className={clsx(
        'input-field',
        error && 'error',
        disabled && 'disabled',
        value && 'float',
        size,
        className
      )}
    >
      <div className={clsx('input-box')}>
        {Icon && <Icon className="icon" />}
        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="input"
          {...otherProps}
        />
        {label && (
          <label htmlFor={id || name} className="label">
            {label}
          </label>
        )}
      </div>
      {error && <small className="error-text">{errorText}</small>}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  errorText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'new-password']),
  size: PropTypes.oneOf(['large', 'small']),
  iconElement: PropTypes.elementType,
};
export default InputField;
