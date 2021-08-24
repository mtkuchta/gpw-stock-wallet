import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ title, small, onClick, id, disabled = false }) => {
  return (
    <StyledButton small={small} name={title} onClick={onClick} id={id} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};

export default Button;
