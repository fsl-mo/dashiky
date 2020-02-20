import React from 'react';

import ProductGroups from '../../components/product-groups/product-groups.component';

import './home.styles.scss';

const Home = () => (
  <div className="home-page">
    <section className="section-product-groups">
      <ProductGroups />
    </section>
  </div>
);

export default Home;
