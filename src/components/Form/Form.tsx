/* eslint-disable consistent-return */
import React from 'react';

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import { FormState, FormProps } from '../types';

import { validateEmail, validatePassword } from '../../utils/utils';

import './Form.scss';

export default class SignUpForm extends React.Component<FormProps, FormState> {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: '',
      email: '',
      emailInputError: false,
      passwordInputError: false,
      passwordErrorText: '',
    };
  }

  handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateEmail(event.target.value)) {
      this.setState({ emailInputError: true, email: event.target.value });
    } else {
      this.setState({ emailInputError: false, email: event.target.value });
    }
  };

  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { variant } = this.props;
    const value = event.target.value as string;

    if (variant === 'signin') {
      return this.setState({ password: value });
    }

    const { isValid, message } = validatePassword(value);

    if (!isValid) {
      this.setState({
        passwordInputError: true,
        passwordErrorText: message as string,
        password: value,
      });
    } else {
      this.setState({
        passwordInputError: false,
        passwordErrorText: '',
        password: value,
      });
    }
  };

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const {
      showPassword,
      password,
      email,
      emailInputError,
      passwordInputError,
      passwordErrorText,
    } = this.state;

    const { variant, onSubmit } = this.props;

    const buttonText = variant === 'signup' ? 'Sign Up' : 'Sign In';

    const buttonDisabled = emailInputError || passwordInputError || !password || !email;

    return (
      <form className="form" onSubmit={(e) => onSubmit(e, { email, password })}>
        <TextField
          error={emailInputError}
          helperText={emailInputError ? 'Email incorrect' : ''}
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
            error={passwordInputError}
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
        <p className="form__input-error">{passwordErrorText}</p>
        <Button type="submit" className="form__button" disabled={buttonDisabled}>{buttonText}</Button>
      </form>
    );
  }
}
