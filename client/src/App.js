import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './layouts/header/header.component';
import Footer from './layouts/footer/footer.component';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import About from './pages/about/about.component';
import Error from './pages/error/error.component';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <main role="main">
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/error-page" component={Error} />
        <Redirect
          to={{
            pathname: '/error-page',
            state: { error: { status: 404 } },
          }}
        />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
