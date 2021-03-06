import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../components/logo/logo.component';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useHistory().location;
  const setActiveClass = path => (pathname === path ? 'active' : '');
  return (
    <header>
      <Link to="/" className="app-logo">
        <Logo variant="dark" />
      </Link>
      <nav className="nav-links">
        <Link to="/shop" className={`nav-link ${setActiveClass('/shop')}`}>
          Shop
        </Link>

        <Link to="/about" className={`nav-link ${setActiveClass('/about')}`}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
