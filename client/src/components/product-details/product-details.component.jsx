import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SHOP_DATA } from '../../data/data';

import './product-details.styles.scss';
import Button from '../ui/button/button.component';

const ProductDetails = () => {
  const { collectionId, productId } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () =>
    SHOP_DATA.filter(c => c.routeName === collectionId).map(({ items }) => ({
      ...items.find(item => item.id.toString() === productId),
    }))[0];

  useEffect(() => {
    setProduct(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionId, productId]);

  const onAddToBag = () => {
    console.log(`Product ${productId} Added to bag`);
  };

  if (!product) return <h1>Fetching...</h1>;
  const {
    name,
    imageUrl,
    description,
    stock,
    price,
    type,
    brand,
    gender,
  } = product;
  return (
    <div className="product-details">
      <div className="image-wrap">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="content">
        <h3 className="name">{name}</h3>
        <h2 className="price">${price}</h2>
        {stock < 10 && (
          <div className="stock">
            <span role="img" aria-label="number of stock left">
              🔥
            </span>
            Only {stock} pcs left
          </div>
        )}

        <div className="details">
          <div className="detail">
            <span>Type: </span> {type.trim()}
          </div>
          <div className="detail">
            <span>Brand:</span> {brand.trim()}
          </div>
          <div className="detail">
            <span>Gender: </span>
            {gender.trim()}
          </div>
          <Button
            variant="dark"
            className="button-addToBag"
            onClick={onAddToBag}
          >
            Add to bag
          </Button>
          <hr className="divider" />
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
