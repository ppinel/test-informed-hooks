import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${props => props.color};
  font-family: ${props => props.family};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  white-space: ${props => props.space};
`;

Title.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  family: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.string,
  space: PropTypes.string,
  weigth: PropTypes.string,
};

Title.defaultProps = {
  align: 'inherit',
  color: '#5e6488',
  margin: '0',
  padding: '0',
  size: '22px',
  space: 'none',
  weight: 'bold',
  family: 'Open Sans',
};

export default Title;
