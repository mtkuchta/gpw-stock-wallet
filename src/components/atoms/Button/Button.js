import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ title, small, onClick, id }) => {
  return (
    <StyledButton small={small} name={title} onClick={onClick} id={id}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
