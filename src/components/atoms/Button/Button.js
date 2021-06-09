import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ title, small, onClick }) => {
  return (
    <StyledButton small={small} name={title} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
