import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';

import logoGrayUrl from '../../assets/images/store/logo-gray.svg';
import logoBlackUrl from '../../assets/images/store/logo-black.svg';
import logoWhiteUrl from '../../assets/images/store/logo-white.svg';

import './logo.styles.scss';

const Logo = ({ className, variant }) => {
  const getLogoVariant = type => {
    if (type === 'light') return logoWhiteUrl;
    if (type === 'dark') return logoBlackUrl;
    return logoGrayUrl;
  };

  return (
    <img
      src={getLogoVariant(variant)}
      alt="flomingo"
      className={clsx('logo', className)}
    />
  );
};
Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};
export default Logo;
