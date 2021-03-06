import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import CollectionItem from '../collection-item/collection-item-component';

import './collection-preview.styles.scss';

const CollectionPreview = () => {
  const { collectionId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (collectionId) {
      const collectionData = SHOP_DATA.filter(
        collection => collection.routeName === collectionId
      );
      setData(collectionData);
    } else {
      setData(SHOP_DATA);
    }
  }, [collectionId]);

  if (!data) return null;

  const renderItems = (items, pathname) => {
    const collectionItems = !collectionId
      ? items.filter((item, idx) => idx < 3)
      : items;

    return collectionItems.map(item => (
      <CollectionItem
        key={item.id}
        routeName={`${pathname}/${item.id}`}
        {...item}
      />
    ));
  };

  return (
    <div className="collection-preview">
      {data.map(({ id, title, routeName, items }) => (
        <div key={id} className="preview">
          <h2 className="title">{title}</h2>
          <div className="items">
            {renderItems(items, `/shop/${routeName}`)}
          </div>
          {data.length > 1 && (
            <div className="viewAll">
              <Link to={`/shop/${routeName}`} className="btn btn--dark">
                View All
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollectionPreview;
