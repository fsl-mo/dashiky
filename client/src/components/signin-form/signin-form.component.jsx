import React, { Component } from 'react';

import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/password-icon.svg';

import './signin-form.styles.scss';

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
          <h2>Sign in</h2>
          <p>Welcome Back, Please login to your account.</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            <EmailIcon className="icon" />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.onChange}
            placeholder="Email"
            className="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            <PasswordIcon className="icon" />
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={this.onChange}
            placeholder="Password"
            autoComplete="new-password"
            className="password"
          />
        </div>
        <input
          type="submit"
          value="Sign in"
          className="btn-submit btn btn--primary"
        />
      </form>
    );
  }
}

export default SigninForm;
