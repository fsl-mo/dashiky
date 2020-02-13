import React from 'react';

import visaImageUrl from '../../assets/images/visa.svg';
import masterImageUrl from '../../assets/images/master.svg';
import amexImageUrl from '../../assets/images/amex.svg';
import paypalImageUrl from '../../assets/images/paypal.svg';

import './footer.styles.scss';

const Footer = () => (
  <footer role="contentinfo">
    <div className="copyright">© Dashiky</div>
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
