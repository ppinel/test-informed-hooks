import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  cursor: ${props => props.cursor};
  max-width: ${props => props.maxWidth};
  font-family: 'Open Sans';
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  font-style: ${props => props.fontStyle};
  font-stretch: normal;
  line-height: ${props => props.lineHeight};
  letter-spacing: normal;
  margin: ${props => props.margin};
  color: ${props => props.color};
  padding: ${props => props.padding};
  white-space: ${props => props.space};
`;

Text.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  cursor: PropTypes.string,
  fontStyle: PropTypes.string,
  lineHeight: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.string,
  space: PropTypes.string,
  weight: PropTypes.string,
};

Text.defaultProps = {
  align: 'inherit',
  cursor: '',
  color: '#5e6488',
  fontStyle: 'normal',
  margin: '0',
  maxWidth: 'none',
  padding: '0',
  size: '14px',
  space: 'inherited',
  weight: '300',
  lineHeight: 'normal',
};

export default Text;
