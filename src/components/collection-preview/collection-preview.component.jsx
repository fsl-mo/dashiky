import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item-component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
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
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default CollectionPreview;
