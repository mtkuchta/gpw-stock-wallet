import { ModalWrapper, CloseButton } from './Modal.style';

const Modal = ({ children, isOpen, handleClose }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
