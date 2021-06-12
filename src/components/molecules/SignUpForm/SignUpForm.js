import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledInput, ButtonContainer } from '../LoginForm/LoginForm.style';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  margin-bottom: 10px;
`;

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Create an account:</StyledHeader>
      <StyledInput type="text" placeholder="User name" id="userName" {...register('userName', { required: true })} />
      <StyledInput type="email" placeholder="e-mail" {...register('email', { required: true })} />
      <StyledInput type="number" placeholder="Account balance" />
      <StyledInput type="password" placeholder="Password" {...register('password', { required: true })} />
      <StyledInput type="password" placeholder="Confirm password" {...register('confrimedPassword', { required: true })} />
      <ButtonContainer>
        <Button type="submit" title="Sign Up" />
      </ButtonContainer>
    </StyledForm>
  );
};

export default SignUpForm;
