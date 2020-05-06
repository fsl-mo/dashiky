import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signin-and-signup.styles.scss';

const SignInAndSignUp = () => {
  const [activeTab, setActiveTap] = useState(0);

  return (
    <div className="signIn-and-SignUp-page ">
      <div className="card ">
        <div
          className="card-media"
          style={{
            gridArea: activeTab === 0 ? 'left' : 'right',
          }}
        />
        <div className="card-content">
          {activeTab === 0 ? (
            <div className="signIn-wrap">
              <div className="heading">
                <h2 className="heading-title">Sign in</h2>
                <span className="heading-action">
                  Not a member?
                  <Link to="#" onClick={() => setActiveTap(1)}>
                    Register
                  </Link>
                </span>
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                in, cum voluptate eum veritatis ullam, autem, ab nihil
                consequuntur soluta commodi aspernatur explicabo voluptatum
                debitis obcaecati asperiores! Corrupti voluptatibus deleniti
                possimus maxime. Quae dolorum vel nisi nemo hic ducimus animi ut
                dolores, porro obcaecati asperiores illo nihil odit fugiat ab?
                Inventore exercitationem corporis aperiam adipisci quisquam
                optio ut enim sint incidunt tempore, in autem deleniti porro est
                natus nesciunt, vel quos ex fugiat voluptates velit suscipit
                omnis. Sunt aspernatur et placeat vitae illo repudiandae dolor
                cum quasi error, dolores asperiores non voluptas nesciunt
                obcaecati a facilis, quas reprehenderit ipsum sequi!
              </div>
            </div>
          ) : (
            <div className="signUp-wrap">
              <div className="heading">
                <h2 className="heading-title">Register</h2>
                <span className="heading-action">
                  Already registered?
                  <Link to="#" onClick={() => setActiveTap(0)}>
                    Log in
                  </Link>
                </span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                rerum ex facilis blanditiis aut. Magnam, voluptatem? Voluptates,
                totam. Iure debitis quos blanditiis ab nesciunt neque? Nostrum
                cumque eum earum, at, voluptatum, expedita nulla itaque dolor
                eveniet quasi soluta ipsa eos!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
