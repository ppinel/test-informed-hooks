import React from 'react';
import { asField } from 'informed';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Error, Checkbox, LabelInput } from '../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  margin: 0 0 20px;
`;

const WrapperCheckbox = styled.div`
  display: inline-flex;
`;

const CheckboxField = asField(({ label, fieldState, ...props }) => (
  <Wrapper>
    <WrapperCheckbox>
      <Checkbox fieldState={fieldState} {...props} />
      {React.isValidElement(label) ? label : label && <LabelInput>{label}</LabelInput>}
    </WrapperCheckbox>
    {fieldState.error && fieldState.touched && <Error>{fieldState.error}</Error>}
  </Wrapper>
));

CheckboxField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CheckboxField.defaultProps = {
  label: null,
};

export default CheckboxField;
