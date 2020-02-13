import React from 'react';

import ProductGroupsData from '../../mock/mock-data';

import ProductGroups from '../../components/product-groups/product-groups.component';

import './home.styles.scss';

const Home = () => (
  <div className="home-page">
    <ProductGroups data={ProductGroupsData} />
  </div>
);

export default Home;
