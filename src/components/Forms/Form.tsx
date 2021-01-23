import React from 'react';

import {
  TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import { FormState, FormProps } from './types';

import './Form.scss';

export default class SignUpForm extends React.Component<FormProps, FormState> {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: '',
      email: '',
    };
  }

  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change password');
    this.setState({ password: event.target.value });
  };

  handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    this.setState({ email: event.target.value });
  };

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword, password, email } = this.state;
    const { variant, onSubmit } = this.props;

    const buttonText = variant === 'signup' ? 'Sign Up' : 'Sign In';

    return (
      <form className="form" onSubmit={onSubmit}>
        <TextField
          className="form__input"
          id="outlined-helperText"
          label="Email"
          variant="outlined"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <FormControl className="form__input" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handleChangePassword}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={70}
          />
        </FormControl>
        <Button type="submit" className="form__button">{buttonText}</Button>
      </form>
    );
  }
}
