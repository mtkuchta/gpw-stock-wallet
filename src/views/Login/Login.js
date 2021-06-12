import { Wrapper, Logo } from './Login.style';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import SignUpForm from '../../components/molecules/SignUpForm/SignUpForm';

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
