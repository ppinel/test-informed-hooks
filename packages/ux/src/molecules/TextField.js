import React from 'react';
import { asField } from 'informed';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Error, Input, LabelInput } from '../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  margin: 0 0 20px;
`;

const TextField = asField(({ label, fieldState, ...props }) => (
  <Wrapper>
    <Input fieldState={fieldState} {...props} />
    {label && <LabelInput>{label}</LabelInput>}
    {fieldState.error && fieldState.touched && <Error>{fieldState.error}</Error>}
  </Wrapper>
));

TextField.propTypes = {
  label: PropTypes.string,
};

TextField.defaultProps = {
  label: null,
};

export default TextField;
