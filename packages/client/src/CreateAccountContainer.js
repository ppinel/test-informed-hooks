import React, { Component } from 'react';
import { CreateAccount } from '@test-informed-hooks/ux';
import CreateAccountFormContainer from './CreateAccountFormContainer';

class CreateAccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(CreateAccount);
    return <CreateAccount CreateAccountFormContainer={CreateAccountFormContainer} />;
  }
}

export default CreateAccountContainer;
