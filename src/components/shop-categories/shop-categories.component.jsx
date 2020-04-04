import React from 'react';
import { Link } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import './shop-categories.styles.scss';

const ShopCategories = () => (
  <section className="section-shop-categories">
    <ul className="categories">
      {SHOP_DATA.map(item => (
        <li key={item.id} className={`category-item category-item-${item.id}`}>
          <div
            className="category-item-bg"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <Link to={`/shop/${item.routeName}`} className="category-item-cta">
            <h3 className="title">{item.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default ShopCategories;
