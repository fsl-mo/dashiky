import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signin-and-signup.styles.scss';
import SigninForm from '../../components/signin-form/signin-form.component';

const SigninAndSignup = () => {
  const [activeTab, setActiveTap] = useState(0);

  return (
    <div className="signin-and-signup-page ">
      <div className="card ">
        <div
          className="card-media"
          style={{
            gridArea: activeTab === 0 ? 'left' : 'right',
          }}
        />
        <div className="card-content">
          {activeTab === 0 ? (
            <>
              <SigninForm />
              <div className="card-action">
                Not a member?
                <Link to="#" onClick={() => setActiveTap(1)}>
                  Register
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2>Sign up</h2>
              <div className="card-action">
                Already registered?
                <Link to="#" onClick={() => setActiveTap(0)}>
                  Log in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SigninAndSignup;
