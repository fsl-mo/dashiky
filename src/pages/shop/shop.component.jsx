import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

const Shop = () => {
  const { path } = useRouteMatch();

  return (
    <div className="shop container">
      <Switch>
        <Route exact path={`${path}/:collectionId/:productId`}>
          {/* //TODO: Render productDetails component */}
        </Route>

        <Route
          exact
          path={`${path}/:collectionId`}
          component={CollectionPreview}
        />

        <Route exact path={path} component={CollectionPreview} />
      </Switch>
    </div>
  );
};

export default Shop;
