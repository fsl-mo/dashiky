import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Collections from './pages/collections/collections.component';
import About from './pages/about/about.component';

const App = () => (
  <>
    <Header />
    <main role="main">
      <Switch>
        <Route path="/collections" component={Collections} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </>
);

export default App;
