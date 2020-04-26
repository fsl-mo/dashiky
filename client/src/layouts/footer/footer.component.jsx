import React from 'react';

import Logo from '../../components/logo/logo.component';
import visaImageUrl from '../../assets/images/store/visa.svg';
import masterImageUrl from '../../assets/images/store/master.svg';
import amexImageUrl from '../../assets/images/store/amex.svg';
import paypalImageUrl from '../../assets/images/store/paypal.svg';

import './footer.styles.scss';

const Footer = () => (
  <footer role="contentinfo">
    <div className="copyright">
      <span>©</span> Flomingo
    </div>
    <div className="app-logo">
      <Logo />
    </div>
    <ul className="payment-list">
      <li className="payment-list-item">
        <img src={visaImageUrl} alt="Visa" title="Visa" />
      </li>
      <li className="payment-list-item">
        <img src={masterImageUrl} alt="Mastercard" title="Mastercard" />
      </li>
      <li className="payment-list-item">
        <img src={amexImageUrl} alt="AMEX" title="American Express" />
      </li>
      <li className="payment-list-item">
        <img src={paypalImageUrl} alt="Paypal" title="Paypal" />
      </li>
    </ul>
  </footer>
);

export default Footer;
