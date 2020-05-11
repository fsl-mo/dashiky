import React, { Component } from 'react';

import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';
import InputField from '../ui/input-field/input-field.component';
import Button from '../ui/button/button.component';

import { validateLoginData } from '../../utils/helpers';

import './signin-form.styles.scss';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {},
    };
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState(state => ({
      ...state,
      [name]: value,
      error: { ...state.error, [name]: '' },
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // validate form values
    const { isValid, error } = validateLoginData(email, password);
    if (!isValid) {
      this.setState({ error });
      return;
    }
    // TODO: handle form submit
    console.log(email, password);
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <form onSubmit={this.onSubmit} noValidate className="signin-form">
        <div className="form-content">
          <h1>Sign in</h1>
          <p>Welcome Back, Please login to your account.</p>
        </div>
        <InputField
          id="email"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={this.onChange}
          iconElement={EmailIcon}
          error={!!error.email}
          errorText={error.email}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="new-password"
          value={password}
          onChange={this.onChange}
          iconElement={PasswordIcon}
          error={!!error.password}
          errorText={error.password}
        />
        <Button type="submit" variant="dark" className="form-submit-button">
          Login
        </Button>
      </form>
    );
  }
}

export default SigninForm;
