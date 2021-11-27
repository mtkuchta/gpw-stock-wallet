import Button from '../../components/atoms/Button/Button';
import { Wrapper, ButtonContainer } from './Dividends.style';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import AddDividentForm from '../../components/organisms/AddDividendForm/AddDividendForm';

const Dividends = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Wrapper>
      Dividends
      <ButtonContainer>
        <Button title="Add dividend" onClick={handleOpenModal} />
      </ButtonContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <AddDividentForm handleCloseModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default Dividends;
