import React from 'react';
import { Link } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import './product-groups.styles.scss';

const ProductGroups = () => (
  <ul className="product-groups">
    {SHOP_DATA.map(item => (
      <li
        key={item.id}
        className={`product-group-item product-group-item-${item.id}`}
      >
        <Link to={`/collections/${item.routeName}`}>
          <div
            className="product-group-item-bg"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <div className="product-group-item-cta">
            <h3 className="title">{item.title}</h3>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default ProductGroups;
