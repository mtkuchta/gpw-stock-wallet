import { Wrapper, ButtonsContainer, WalletContainer } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import Button from '../../components/atoms/Button/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/organisms/Modal/Modal';
import BuyStocksForm from '../../components/organisms/BuyStocksForm/BuyStocksForm';
import { useDatabase } from '../../hooks/useDatabase';
import TextInfo from '../../components/atoms/TextInfo.js/TextInfo';
import { indexes } from '../../assets/menus';

const Wallet = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { wallet } = useDatabase();

  return (
    <Wrapper>
      {Object.keys(wallet).length === 0 ? (
        <TextInfo text="Your wallet is empty" />
      ) : (
        <WalletContainer>
          <FilteringMenu query="index" items={indexes} />
          <WalletTable />
        </WalletContainer>
      )}
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
