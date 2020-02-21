import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo.component';

import './header.styles.scss';

const Header = () => (
  <header>
    <Link to="/" className="app-logo">
      <Logo variant="dark" />
    </Link>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="#cart-menu" className="nav-link">
          Cart
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
