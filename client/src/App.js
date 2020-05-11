import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './layouts/header/header.component';
import Footer from './layouts/footer/footer.component';

import useFirebaseAuth from './hooks/useFirebaseAuth';

import AuthRoute from './routes/AuthRoute';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import AboutPage from './pages/about/about.component';
import ErrorPage from './pages/error/error.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <main role="main">
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/about" component={AboutPage} />
        <AuthRoute exact path="/login" component={SignInAndSignUpPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/error-page" component={ErrorPage} />
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
