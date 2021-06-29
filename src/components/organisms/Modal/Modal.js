import { ModalWrapper, CloseButton } from './Modal.style';
import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, handleClose }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
