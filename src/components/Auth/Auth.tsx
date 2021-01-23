import React from 'react';

import {
  Paper, Tabs, Tab,
} from '@material-ui/core';

import Form from '../Forms/Form';

import './Auth.scss';

type AuthFormState = {
  activeTab: number
};

export default class AuthForm extends React.Component<{}, AuthFormState> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  signInSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('sign in');
  };

  signUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('sign up');
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ activeTab: newValue });
  };

  a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  render() {
    const { activeTab } = this.state;

    return (
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
    );
  }
}
