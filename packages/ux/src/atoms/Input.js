import { BasicText } from 'informed';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Input = styled(BasicText)`
  border-radius: 10px;
  height: ${props => props.height};
  border: solid 1px ${props => props.border};
  width: ${props => props.width};
  outline: none;
  padding: ${props => props.padding};
  box-sizing: border-box;
  margin: ${props => props.margin};
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: #5e6488;
  background-color: ${props => props.background};

  /* Change background-color yellow -> white for Google's autocomplete */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }

  :focus {
    ${props => (props.inline ? '' : 'border: solid 1px #94cdee')};
  }

  :focus + label {
    color: #94cdee;
  }

  &[type='checkbox']:focus + label {
    color: #99a1ba;
  }

  ::placeholder {
    color: #b3b3b3;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #f8f8f8;
      color: #989898;
    `}
`;

Input.propTypes = {
  align: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  height: PropTypes.string,
  margin: PropTypes.string,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  align: 'left',
  border: '#d8d8d8',
  background: '#FFFFFF',
  fontSize: '16px',
  fontWeight: 400,
  height: '42px',
  margin: '0 0 20px 0',
  type: 'text',
  width: '400px',
  placeholder: '',
  padding: '0 12px',
};

export default Input;
