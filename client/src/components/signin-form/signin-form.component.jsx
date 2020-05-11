import React, { useState } from 'react';

import userFirebaseAuth from '../../hooks/useFirebaseAuth';
import { validateLoginData } from '../../utils/helpers';

import InputField from '../ui/input-field/input-field.component';
import Button from '../ui/button/button.component';
import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-icon.svg';

import './signin-form.styles.scss';

const SigninForm = () => {
  const { signInWithGoogle, signInWithFacebook } = userFirebaseAuth();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = values;

    // validate form values
    const { isValid, error } = validateLoginData(email, password);
    if (!isValid) {
      setErrors({ ...error });
    } else {
      setErrors({});
    }
    // TODO: handle form submit
  };

  return (
    <form onSubmit={onSubmit} noValidate className="signin-form">
      <div className="form-content">
        <h1>Sign in</h1>
        <p>Welcome Back, Please login to your account.</p>
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
    </form>
  );
};

export default SigninForm;
