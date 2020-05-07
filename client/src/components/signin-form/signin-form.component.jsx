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
      email: '',
      password: '',
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;

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
          value={email}
          onChange={this.onChange}
          placeholder="Email"
          iconElement={EmailIcon}
          label="Email"
        />
        <InputField
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
          autoComplete="new-password"
          iconElement={PasswordIcon}
          label="Password"
        />

        <Button type="submit" variant="dark" className="form-submit-button">
          Login
        </Button>
      </form>
    );
  }
}

export default SigninForm;
