import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './error.styles.scss';

const Error = () => {
  const { state } = useLocation();
  const error = state && state.error ? state.error : null;
  const referrer = state && state.referrer ? state.referrer : '/';

  return (
    <div className="error-page">
      <div className="content-wrapper container">
        <div className="content">
          <span className="emoji" role="img" aria-label="error">
            😟
          </span>
          {error && <h2 className="subHeading">ERROR {error.status}</h2>}
          <div className="heading">
            ooops, Something <br />
            went wrong
          </div>

          <Link to={referrer} className="goBack-link">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
