import React from 'react';

import {
  Paper, Tabs, Tab,
} from '@material-ui/core';

import Form from '../Form/Form';

import Snackbar from '../Snackbar/Snackbar';

import { signIn, signUp } from '../../api/api';

import { UserPayload, AuthFormState } from '../types';

import './Auth.scss';

export default class AuthForm extends React.Component<{}, AuthFormState> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      alertMessage: '',
      alertSeverity: 'error',
      showAlert: false,
    };
  }

  signInSubmitHandler = (e: React.FormEvent<HTMLFormElement>, payload: UserPayload) => {
    e.preventDefault();
    signIn(payload).then(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (res) => this.setState({
        showAlert: true,
        alertMessage: 'SignUp success',
        alertSeverity: 'success',
      }, () => this.closeSnackbar()),
    ).catch(
      (err) => this.setState({
        showAlert: true,
        alertMessage: err.message,
        alertSeverity: 'error',
      }, () => this.closeSnackbar()),
    );
  };

  signUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>, payload: UserPayload) => {
    e.preventDefault();
    signUp(payload).then(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (res) => this.setState({
        showAlert: true,
        alertMessage: 'SignUp success',
        alertSeverity: 'success',
      }, () => this.closeSnackbar()),
    ).catch(
      (err) => this.setState({
        showAlert: true,
        alertMessage: err.message,
        alertSeverity: 'error',
      }, () => this.closeSnackbar()),
    );
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ activeTab: newValue });
  };

  closeSnackbar = () => {
    setTimeout(() => {
      this.setState({
        showAlert: false,
      });
    }, 3000);
  };

  a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  render() {
    const {
      activeTab,
      alertMessage,
      alertSeverity,
      showAlert,
    } = this.state;

    return (
      <>
        <Paper className="auth-form">
          <Tabs
            TabIndicatorProps={{ style: { background: 'purple' } }}
            className="auth-form__tabs"
            value={activeTab}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
          >
            <Tab className="auth-form__tab" label="SIGN UP" {...this.a11yProps(0)} />
            <Tab className="auth-form__tab" label="SIGN IN" {...this.a11yProps(1)} />
          </Tabs>
          {activeTab === 0 && <Form onSubmit={this.signUpSubmitHandler} variant="signup" />}
          {activeTab === 1 && <Form onSubmit={this.signInSubmitHandler} variant="signin" />}
        </Paper>
        <Snackbar open={showAlert} severity={alertSeverity} message={alertMessage} />
      </>
    );
  }
}
