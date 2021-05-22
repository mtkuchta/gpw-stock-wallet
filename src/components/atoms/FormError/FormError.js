import { StyledError } from './FormError.style';
import PropTypes from 'prop-types';

const FormError = ({ text }) => {
  return <StyledError>{text}</StyledError>;
};
FormError.propTypes = {
  text: PropTypes.string,
};

export default FormError;
