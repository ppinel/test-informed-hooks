import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField, CheckboxField } from '../molecules';
import { Button, Error, Text, Title } from '../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 80%;
    min-width: 0px;
  }
`;

const ViewCheckbox = styled.div`
  display: inline-flex;
`;

const ViewLink = styled.div`
  color: #a2d2f5;
  display: inline;
  cursor: pointer;
`;

const CreateAccountForm = ({ errors }) => (
  <Wrapper>
    <Title align="center" margin="0 0 40px 0" size="19px" weight="600">
      Créer mon compte
    </Title>
    <TextField
      error={errors.email}
      field="email"
      label="E-mail"
      placeholder="hello@gmail.com"
      required
      type="email"
    />
    <TextField
      error={errors.password}
      field="password"
      label="Mot de passe"
      margin="0 0 20px 0"
      placeholder="********"
      type="password"
    />
    <TextField
      error={errors.confirmPassword}
      field="confirmPassword"
      label="Confirmation"
      margin="0 0 10px 0"
      placeholder="********"
      type="password"
    />
    <ViewCheckbox>
      <CheckboxField
        error={errors.cgu}
        field="cgu"
        label={
          <Text>
            J&#8217;ai lu et j&#8217;accepte les{' '}
            <ViewLink>conditions générales d&#8217;utilisation du service</ViewLink>
          </Text>
        }
      />
    </ViewCheckbox>
    {errors.form && <Error>{errors.form}</Error>}
    <Button color="primary" fontSize="19px" margin="10px auto 20px auto" type="submit">
      Créer mon compte
    </Button>
    <Text align="center" color="#a6a6a6" cursor="pointer" margin="5px" weight="600">
      J&#8217;ai déjà un compte
    </Text>
  </Wrapper>
);

CreateAccountForm.propTypes = {
  errors: PropTypes.shape({
    confirmPassword: PropTypes.string,
    email: PropTypes.string,
    form: PropTypes.string,
    password: PropTypes.string,
  }),
};

CreateAccountForm.defaultProps = {
  errors: {},
};

export default CreateAccountForm;
