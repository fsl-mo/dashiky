import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import Logo from '../../components/logo/logo.component';

const Header = () => (
  <header>
    <div className="logo-wrapper">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="#main-menu" className="nav-link">
          Menu
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#cart-menu" className="nav-link">
          Cart
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
