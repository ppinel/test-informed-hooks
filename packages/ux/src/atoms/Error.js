import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ViewError = styled.div`
  color: #e84747;
  margin: ${props => props.margin};
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: ${props => props.align};
  white-space: pre-line;
  ${props =>
    props.position === 'sticky' &&
    css`
      position: sticky;
      background: #fff;
      bottom: 0;
      padding: 10px 0;
    `}
`;

const Error = ({ children, ...props }) => <ViewError {...props}>{children}</ViewError>;

Error.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  position: PropTypes.string,
};

Error.defaultProps = {
  margin: '0 0 20px 0',
  position: 'intial',
  align: 'left',
};

export default Error;
