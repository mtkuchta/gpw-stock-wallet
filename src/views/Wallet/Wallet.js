import { Wrapper, ButtonsContainer } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import IndexMenu from '../../components/molecules/IndexMenu/IndexMenu';
import Button from '../../components/atoms/Button/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/organisms/Modal/Modal';

const Wallet = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <IndexMenu />
      <WalletTable />
      <ButtonsContainer>
        <Button title="Buy stocks" onClick={handleOpenModal} />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}></Modal>
    </Wrapper>
  );
};

export default Wallet;
