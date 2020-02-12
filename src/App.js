import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Collections from './pages/collections/collections.component';
import About from './pages/about/about.component';

const App = () => (
  <Switch>
    <Route path="/collections" component={Collections} />
    <Route exact path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
