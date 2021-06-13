import { StyledHeader } from './SignUpForm.style';
import { StyledForm, StyledInput, ButtonContainer } from '../LoginForm/LoginForm.style';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import FormError from '../../atoms/FormError/FormError';

const SignUpForm = () => {
  const { signUp, authError } = useAuth();
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setIsPasswordConfirmed(true);
    if (data.password === data.confirmedPassword) {
      signUp(data.email, data.password);
    } else {
      setIsPasswordConfirmed(false);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Create an account:</StyledHeader>
      <StyledInput type="text" placeholder="User name" id="userName" {...register('userName', { required: true })} />
      <StyledInput type="email" placeholder="e-mail" {...register('email', { required: true })} />
      <StyledInput type="number" placeholder="Account balance" />
      <StyledInput type="password" placeholder="Password" {...register('password', { required: true })} />
      <StyledInput type="password" placeholder="Confirm password" {...register('confirmedPassword', { required: true })} />
      {isPasswordConfirmed && <FormError text="Passwords are different " />}
      <ButtonContainer>
        <Button type="submit" title="Sign Up" />
      </ButtonContainer>
    </StyledForm>
  );
};

export default SignUpForm;
