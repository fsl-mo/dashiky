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

  getPreviewItems = items => items.filter((item, idx) => idx < 6);

  renderContent = () => {
    const { data } = this.state;
    const { collectionId } = this.props.match.params;

    return (
      <div className="shop-page container">
        {collectionId
          ? data
              .filter(item => item.routeName === collectionId)
              .map(({ id, items, ...rest }) => (
                <CollectionPreview key={id} items={items} {...rest} />
              ))
          : data.map(({ id, items, ...rest }) => (
              <CollectionPreview
                key={id}
                items={this.getPreviewItems(items)}
                showViewAll
                {...rest}
              />
            ))}
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Shop;
