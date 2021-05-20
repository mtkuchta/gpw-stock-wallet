import { StyledButton } from './Button.style';

const Button = ({ title, onClick }) => {
  return (
    <StyledButton name={title} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
