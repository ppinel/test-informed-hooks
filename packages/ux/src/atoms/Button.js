import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  background-color: #f6f7f8;
  font-family: Open Sans;
  font-size: ${props => props.fontSize};
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #5e6488;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-width: inherit;
  border-color: inherit;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  :disabled,
  :disabled:hover {
    cursor: not-allowed;
    transition: filter 0.5s ease;
    filter: brightness(95%);
    color: #898989;
    box-shadow: none;
  }

  :hover {
    transition: background-color 0.5s ease;
    background-color: #f1f2f3;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }

  :active {
    transition: background-color 0.5s ease;
    background-color: #ecedee;
    box-shadow: none;
  }

  :focus {
    outline: none;
  }

  ${props =>
    props.color === 'primary' &&
    css`
      background-color: #f5d932;

      :hover {
        background-color: #f0d42e;
      }

      :active {
        background-color: #eacf29;
      }
    `}
`;

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', '']),
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  color: '',
  fontSize: '14px',
  margin: '0',
  padding: '10px 26px',
};

export default Button;
