import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl, price, className }) => (
  <div className={clsx('collection-item', className)}>
    <div className="image" style={{ background: `url(${imageUrl})` }} />
    <div className="content">
      <div className="name">{name}</div>
      <div className="price">{price}$</div>
    </div>
  </div>
);

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CollectionItem;
