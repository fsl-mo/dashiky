import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './layouts/header/header.component';
import Footer from './layouts/footer/footer.component';

import Home from './pages/home/home.component';
import Collections from './pages/collections/collections.component';
import About from './pages/about/about.component';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <main role="main">
      <Switch>
        <Route path="/collections" component={Collections} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        {/* TODO: create 404 page and redirect broken links. */}
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
