import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';

import logoImageUrl from '../../assets/images/logo.svg';

import './logo.styles.scss';

const Logo = ({ className }) => <img src={logoImageUrl} alt="Dashiky" className={clsx('logo', className)} />;
Logo.propTypes = {
  className: PropTypes.string,
};
export default Logo;
