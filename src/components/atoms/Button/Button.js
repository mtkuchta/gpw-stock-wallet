import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ title, onClick }) => {
  return (
    <StyledButton name={title} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
