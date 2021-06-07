import { useState, useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import { Wrapper } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import IndexMenu from '../../components/molecules/IndexMenu/IndexMenu';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import StockDetails from '../../components/organisms/StockDetails/StockDetails';

const Wallet = () => {
  const { wallet } = useContext(UserContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [activeStock, setActiveStock] = useState();

  const showStockDetails = (e) => {
    setActiveStock(wallet[e.target.parentNode.id]);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <IndexMenu />
      <WalletTable openModal={showStockDetails} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <StockDetails stock={activeStock} />
      </Modal>
    </Wrapper>
  );
};

export default Wallet;
