import { BasicCheckbox } from 'informed';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled(BasicCheckbox)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: ${({ background: { unchecked } }) => unchecked};
  color: ${({ color }) => color};
  height: 18px;
  width: 18px;
  padding: 0px 2px;
  border: ${({ border }) => border};
  border-radius: 5px;
  cursor: pointer;
  margin-right: 7px;
  outline: none;
  :checked::before {
    position: absolute;
    font-size: 14px;
    font-weight: 800;
    left: 4px;
    top: -3px;
    content: '\\02143';
    transform: rotate(40deg);
  }
  :checked {
    background-color: ${({ background: { checked } }) => checked};
  }
  :focus {
    border: ${({ border }) => border};
  }
`;

Input.propTypes = {
  background: PropTypes.shape({
    checked: PropTypes.string,
    unchecked: PropTypes.string,
  }),
  border: PropTypes.string,
  color: PropTypes.string,
};

Input.defaultProps = {
  background: { checked: '#f5d932', unchecked: '#fff' },
  border: '1px solid #f5d932',
  color: '#5e6488',
};

export default Input;
