import React, { Component } from 'react';

import { SHOP_DATA } from '../../data/data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA,
    };
  }

  getPreviewItems = items => items.filter((item, idx) => idx < 4);

  render() {
    const { data } = this.state;
    return (
      <div className="shop-page container">
        {data.map(item => (
          <CollectionPreview
            key={item.id}
            title={item.title}
            items={this.getPreviewItems(item.items)}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
