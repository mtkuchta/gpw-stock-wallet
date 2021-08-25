import { Wrapper, Logo } from './Login.style';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import SignUpForm from '../../components/organisms/SignUpForm/SignUpForm';

const Login = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Wrapper>
      <Logo>GPW Stock Wallet</Logo>
      <LoginForm openModal={handleOpenModal} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <SignUpForm />
      </Modal>
    </Wrapper>
  );
};

export default Login;
