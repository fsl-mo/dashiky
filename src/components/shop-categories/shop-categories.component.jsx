import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import './shop-categories.styles.scss';

const getCategories = () =>
  SHOP_DATA.map(({ id, title, imageUrl, routeName }) => ({
    id,
    title,
    routeName,
    imageUrl,
  }));

const ShopCategories = () => {
  const [categories] = useState(getCategories());
  return (
    <section className="section-shop-categories">
      <ul className="categories">
        {categories.map(item => (
          <li
            key={item.id}
            className={`category-item category-item-${item.id}`}
          >
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
};

export default ShopCategories;
