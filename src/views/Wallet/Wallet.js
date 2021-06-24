import { Wrapper, ButtonsContainer } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import IndexMenu from '../../components/molecules/IndexMenu/IndexMenu';
import Button from '../../components/atoms/Button/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/organisms/Modal/Modal';
import BuyStocksForm from '../../components/organisms/BuyStocksForm/BuyStocksForm';

const Wallet = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <IndexMenu />
      <WalletTable />
      <ButtonsContainer>
        <Button title="Add stocks" onClick={handleOpenModal} />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <BuyStocksForm handleCloseModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default Wallet;
