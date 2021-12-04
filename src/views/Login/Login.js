import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Wrapper, Logo } from './Login.style';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import SignUpForm from '../../components/organisms/SignUpForm/SignUpForm';

const Login = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const tl = useRef(null);
  const logoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (tl.current) {
      tl.current
        .to(logoRef.current, { scale: 1, opacity: 1, duartion: 0.8 })
        .to(formRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: 'Power4.easeOut' }, '+0.5');
    }
  }, []);

  return (
    <Wrapper>
      <Logo ref={logoRef}>GPW Stock Wallet</Logo>
      <LoginForm openModal={handleOpenModal} ref={formRef} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <SignUpForm />
      </Modal>
    </Wrapper>
  );
};

export default Login;
