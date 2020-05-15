import React, { useState } from 'react';

import userFirebaseAuth from '../../hooks/useFirebaseAuth';
import { validateLoginData } from '../../utils/helpers';

import InputField from '../ui/input-field/input-field.component';
import Button from '../ui/button/button.component';
import Alert from '../ui/alert/alert.component';

import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-icon.svg';

import './signin-form.styles.scss';

const SigninForm = () => {
  const {
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    clearAuthErrors,
    auth,
  } = userFirebaseAuth();

  const [form, setForm] = useState({
    values: { email: '', password: '' },
    errors: {},
  });

  const onChange = e => {
    const { name, value } = e.target;
    setForm(s => ({ ...s, values: { ...s.values, [name]: value } }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = form.values;
    // validate form values
    const { isValid, error } = validateLoginData(email, password);
    if (!isValid) return setForm(s => ({ ...s, errors: error }));
    setForm(s => ({ ...s, errors: {} }));

    // TODO: handle form submit
    signInWithEmailAndPassword(email, password);
  };

  const renderErrorMessage = () => {
    if (auth.error) {
      if (auth.error.code && auth.error.code === 'auth/popup-closed-by-user')
        return (
          <Alert
            severity="error"
            message="Sign in operation failed, Please try again. "
            onClose={clearAuthErrors}
          />
        );
    }
  };

  const { values, errors } = form;
  console.log('0000', auth);
  return (
    <form onSubmit={onSubmit} noValidate className="signin-form">
      <div className="form-content">
        <h1>Sign in</h1>
        <p>Welcome Back, Please login to your account.</p>

        {auth.error && auth.error.signIn && (
          <div className="signIn-error-message">
            <span role="img" aria-label="sign in error">
              🤔
            </span>
            {auth.error.signIn}
          </div>
        )}
      </div>
      <InputField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={values.email}
        onChange={onChange}
        iconElement={EmailIcon}
        error={!!errors.email}
        errorText={errors.email}
      />
      <InputField
        id="password"
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        value={values.password}
        onChange={onChange}
        iconElement={PasswordIcon}
        error={!!errors.password}
        errorText={errors.password}
      />
      <Button type="submit" variant="dark" className="button">
        Login
      </Button>
      <Button
        type="button"
        variant="light"
        onClick={() => {
          signInWithGoogle();
        }}
        className="button"
        iconElement={GoogleIcon}
      >
        Sign in with Google
      </Button>
      <Button
        type="button"
        variant="light"
        onClick={() => {
          signInWithFacebook();
        }}
        className="button"
        iconElement={FacebookIcon}
      >
        Sign in with Facebook
      </Button>
      {renderErrorMessage()}
    </form>
  );
};

export default SigninForm;
