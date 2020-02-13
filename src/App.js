import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

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
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
