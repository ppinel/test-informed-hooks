import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Text } from '../atoms';

const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 4vh 2vw;
  margin-top: 10vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const B2bCreateAccount = ({ CreateAccountFormContainer, ...props }) => (
  <MainContainer>
    <LeftContainer>
      <Text>Je suis une image</Text>
    </LeftContainer>
    <RightContainer>
      <Title align="center" margin="0 0 20px 0" weight="600">
        Bienvenue
      </Title>
      <CreateAccountFormContainer {...props} />
    </RightContainer>
  </MainContainer>
);

B2bCreateAccount.propTypes = {
  CreateAccountFormContainer: PropTypes.func.isRequired,
};

export default B2bCreateAccount;
