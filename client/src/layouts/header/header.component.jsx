import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { signOut } from '../../firebase/handlers/auth';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

import Logo from '../../components/ui/logo/logo.component';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useHistory().location;
  const { auth } = useFirebaseAuth();
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

        <span className="divider " />
        {!auth.isAuthenticated ? (
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        ) : (
          <div
            role="presentation"
            className="nav-link"
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
