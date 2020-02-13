import React from 'react';
import { Link } from 'react-router-dom';

import './product-groups.styles.scss';

const ProductGroups = ({ data }) => {
  if (!data) return null;
  return (
    <ul className="product-groups">
      {data.map(item => (
        <li key={item.id} className="product-group-item">
          <Link to={`/collections/${item.id}`}>
            <img src={`${item.imgUrl}`} alt={item.title} className="image" />
            <h2 className="title">{item.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductGroups;
