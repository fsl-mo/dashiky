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
          {error && <span className="subHeading">ERROR {error.status}</span>}
          <h2 className="heading">
            ooops, Something <br />
            went wrong
          </h2>

          <Link to={referrer} className=" btn btn--primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
