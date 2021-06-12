import { useAuth } from '../../../hooks/useAuth';
import { StyledForm, StyledInput, ButtonContainer, StyledHeader } from './LoginForm.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';

const LoginForm = ({ openModal }) => {
  const { signIn } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Login</StyledHeader>
      <StyledInput type="email" placeholder="e-mail" id="email" {...register('email', { required: true })} />
      <StyledInput type="password" placeholder="password" id="password" {...register('password', { required: true })} />
      <div>
        Do you need an account?
        <span onClick={openModal}> Sign Up</span>
      </div>
      <ButtonContainer>
        <Button type="submit" title="Login" />
      </ButtonContainer>
    </StyledForm>
  );
};

export default LoginForm;
