import { Wrapper, StyledHeader } from './StockDetails.style';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockSummary from '../../components/molecules/StockSummary/StockSummary';
import PositionsTable from '../../components/molecules/PositionsTable/PositionsTable';
import Modal from '../../components/organisms/Modal/Modal';
import { useDatabase } from '../../hooks/useDatabase';
import useModal from '../../hooks/useModal';
import SellStocksForm from '../../components/organisms/SellStocksForm/SellStocksForm';
import StockName from '../../components/atoms/StockName/StockName';

const StockDetails = () => {
  const params = useParams();
  const [activeStock, setActiveStock] = useState(null);
  const [idToSell, setIdToSell] = useState(null);
  const { wallet } = useDatabase();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    const unsubscribe = () => {
      const stock = Object.values(wallet).filter((stock) => {
        return stock.ticker === params.ticker;
      });
      if (stock) setActiveStock(stock[0]);
    };
    return unsubscribe();
  }, [wallet]);

  const handleSellStocks = (e) => {
    setIdToSell(Number(e.target.id));
    handleOpenModal();
  };

  return (
    <Wrapper>
      {activeStock && (
        <>
          <StockName>
            <h2>{activeStock.ticker}</h2>
            <h3>{activeStock.companyName} S.A.</h3>
          </StockName>
          <StockSummary stock={activeStock} />
          <PositionsTable stock={activeStock} handleSellStocks={handleSellStocks} />
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            {idToSell ? (
              <SellStocksForm
                idToSell={idToSell}
                stock={activeStock}
                handleCloseModal={handleCloseModal}
                setIdToSell={setIdToSell}
              />
            ) : null}
          </Modal>
        </>
      )}
    </Wrapper>
  );
};

export default StockDetails;
