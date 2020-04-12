import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item-component';

import './collection-preview.styles.scss';

const CollectionPreview = ({
  title,
  routeName,
  items,
  showViewAll = false,
}) => (
  <div className="collection-preview">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem
          key={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          price={item.price}
          className="preview-item"
        />
      ))}
    </div>
    {showViewAll && (
      <div className="viewAll">
        <Link to={`/shop/${routeName}`} className="btn btn--dark">
          View All
        </Link>
      </div>
    )}
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  routeName: PropTypes.string,
  showViewAll: PropTypes.bool,
  items: PropTypes.array,
};

export default CollectionPreview;
