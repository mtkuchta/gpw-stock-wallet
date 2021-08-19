import PropTypes from 'prop-types';
import { StyledText } from './TextInfo.style';

const TextInfo = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

TextInfo.propTypes = {
  text: PropTypes.string,
};

export default TextInfo;
