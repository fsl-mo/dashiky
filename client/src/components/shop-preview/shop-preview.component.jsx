import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import './shop-preview.styles.scss';

const getCategories = () =>
  SHOP_DATA.map(({ id, title, imageUrl, routeName }) => ({
    id,
    title,
    routeName,
    imageUrl,
  }));

const ShopPreview = () => {
  const [categories] = useState(getCategories());
  return (
    <ul className="shop-preview">
      {categories.map(item => (
        <li key={item.id} className={`preview-item ${item.routeName}`}>
          <Link to={`/shop/${item.routeName}`}>
            <div
              className="preview-item-bg"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="title">{item.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShopPreview;
