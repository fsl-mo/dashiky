import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLastLocation } from 'react-router-last-location';

import useFirebaseAuth from '../hooks/useFirebaseAuth';

const AuthRoute = ({ component: Component, ...rest }) => {
  const lastLocation = useLastLocation();
  const pathname = lastLocation ? lastLocation.pathname : '/';
  const {
    auth: { isAuthenticated },
  } = useFirebaseAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to={pathname} /> : <Component {...props} />
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthRoute;
