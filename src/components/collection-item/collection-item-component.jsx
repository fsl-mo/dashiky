import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './collection-item.styles.scss';

const CollectionItem = ({ routeName, name, imageUrl, price, className }) => (
  <div className={clsx('collection-item', className)}>
    <div className="image" style={{ background: `url(${imageUrl})` }} />
    <div className="content">
      <Link to={routeName} className="name">
        {name}
      </Link>
      <div className="price">${price}</div>
    </div>
  </div>
);

CollectionItem.propTypes = {
  routeName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CollectionItem;
