import { useAuth } from '../../../hooks/useAuth';
import { StyledForm, StyledInput, ButtonContainer, StyledHeader } from './LoginForm.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import FormError from '../../atoms/FormError/FormError';
import PropTypes from 'prop-types';

const LoginForm = ({ openModal }) => {
  const { signIn, authError } = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await signIn(data.email, data.password);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Login</StyledHeader>
      <StyledInput type="email" placeholder="e-mail" id="email" {...register('email', { required: true })} />
      <StyledInput type="password" placeholder="password" id="password" {...register('password', { required: true })} />
      {authError && <FormError text={authError.message} />}
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

LoginForm.propTypes = {
  openModal: PropTypes.func,
};

export default LoginForm;
