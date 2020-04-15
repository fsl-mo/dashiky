import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './layouts/header/header.component';
import Footer from './layouts/footer/footer.component';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import About from './pages/about/about.component';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <main role="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        {/* TODO: create 404 page and redirect broken links. */}
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
