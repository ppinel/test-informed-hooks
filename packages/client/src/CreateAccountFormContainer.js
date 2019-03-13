import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'informed';
import { CreateAccountForm } from '@test-informed-hooks/ux';
import { cguValidator, emailValidator, passwordValidator } from './validators';

class CreateAccountFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onValidateFields = ({ cgu, email, password, confirmPassword }) => ({
    cgu: cguValidator(cgu),
    email: emailValidator(email),
    password: passwordValidator(password),
    confirmPassword:
      password === confirmPassword ? undefined : 'Les deux mots de passe ne correspondent pas.',
  });

  onSubmit = payload => {
    console.log('Form', payload);
  };

  render() {
    const { error } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ formState }) => (
          <CreateAccountForm errors={{ form: error, ...formState.errors }} {...this.props} />
        )}
        validateFields={this.onValidateFields}
      />
    );
  }
}

CreateAccountFormContainer.propTypes = {
  error: PropTypes.string,
};

CreateAccountFormContainer.defaultProps = {
  error: null,
};

export default CreateAccountFormContainer;
