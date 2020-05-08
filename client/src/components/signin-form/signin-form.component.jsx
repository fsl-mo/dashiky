import React, { Component } from 'react';

import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';
import InputField from '../ui/input-field/input-field.component';

import './signin-form.styles.scss';
import Button from '../ui/button/button.component';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { email: '', password: '' },
      errors: { email: false, password: false },
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { values, errors } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="signin-form">
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
          onChange={this.onChange}
          error={errors.email}
          iconElement={EmailIcon}
          errorText="Must be a valid email address"
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="new-password"
          value={values.password}
          onChange={this.onChange}
          error={errors.email}
          iconElement={PasswordIcon}
          errorText="Must be at least 6 characters long"
        />
        <Button type="submit" variant="dark" className="form-submit-button">
          Login
        </Button>
      </form>
    );
  }
}

export default SigninForm;
