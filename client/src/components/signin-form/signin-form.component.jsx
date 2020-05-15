import React, { useState } from 'react';

import {
  login,
  signInWithGoogle,
  signInWithFacebook,
} from '../../firebase/handlers/auth';

import { validateLoginData } from '../../utils/helpers';

import InputField from '../ui/input-field/input-field.component';
import Button from '../ui/button/button.component';

import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-icon.svg';

import './signin-form.styles.scss';

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    value: { email: '', password: '' },
    error: null,
  });

  const onChange = e => {
    const { name, value: inputValue } = e.target;
    setForm(s => ({
      ...s,
      value: { ...s.value, [name]: inputValue },
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = form.value;

    const { isValid, error } = validateLoginData(email, password);

    if (isValid) {
      setLoading(true);
      login(email, password).catch(err => {
        setLoading(false);
        setForm(state => ({
          ...state,
          error: { ...JSON.parse(err.message) },
        }));
      });
    } else {
      setForm(state => ({ ...state, error }));
    }
  };

  const signInWithProvider = callback => {
    setLoading(true);
    callback().catch(err => {
      setLoading(false);
      setForm(state => ({
        ...state,
        error: { ...JSON.parse(err.message) },
      }));
    });
  };

  const { value, error } = form;
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete="none"
      className="signin-form"
    >
      <div className="form-content">
        <h1>Sign in</h1>
        <p>Welcome Back, Please login to your account.</p>

        {error && error.signIn && (
          <div className="signIn-error-message">
            <span role="img" aria-label="sign in error">
              🤔
            </span>
            {error.signIn}
          </div>
        )}
      </div>
      <InputField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={value.email}
        onChange={onChange}
        iconElement={EmailIcon}
        error={error && !!error.email}
        errorText={error && error.email}
        disabled={loading}
      />
      <InputField
        id="password"
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        value={value.password}
        onChange={onChange}
        iconElement={PasswordIcon}
        error={error && !!error.password}
        errorText={error && error.password}
        disabled={loading}
      />

      <Button
        type="submit"
        variant="dark"
        disabled={loading}
        className="button"
      >
        Login
      </Button>
      <div className="signIn-providers">
        <Button
          type="button"
          variant="light"
          onClick={() => signInWithProvider(signInWithGoogle)}
          className="button"
          iconElement={GoogleIcon}
          disabled={loading}
          title="Sign in with google"
        />
        <Button
          type="button"
          variant="light"
          onClick={() => signInWithProvider(signInWithFacebook)}
          className="button"
          iconElement={FacebookIcon}
          disabled={loading}
          title="Sign in with facebook"
        />
      </div>
      {/* {renderErrorMessage()} */}
    </form>
  );
};

export default SigninForm;
