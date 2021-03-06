import { Wrapper, ButtonsContainer } from './StockDetails.style';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StockSummary from '../../components/molecules/StockSummary/StockSummary';
import PositionsTable from '../../components/molecules/PositionsTable/PositionsTable';
import Modal from '../../components/organisms/Modal/Modal';
import { useDatabase } from '../../hooks/useDatabase';
import useModal from '../../hooks/useModal';
import SellStocksForm from '../../components/organisms/SellStocksForm/SellStocksForm';
import StockName from '../../components/atoms/StockName/StockName';
import queryString from 'query-string';
import Button from '../../components/atoms/Button/Button';
import SellAllPositionsForm from '../../components/organisms/SellAllPositionsForm/SellAllPositionsForm';
import BuyStocksForm from '../../components/organisms/BuyStocksForm/BuyStocksForm';

const StockDetails = () => {
  const [activeStock, setActiveStock] = useState(null);
  const [idToSell, setIdToSell] = useState(null);
  const [buyForm, setBuyForm] = useState(false);
  const { wallet } = useDatabase();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const { search } = useLocation();
  const { ticker } = queryString.parse(search);

  useEffect(() => {
    const unsubscribe = () => {
      const stock = Object.values(wallet).filter((stock) => {
        return stock.ticker === ticker;
      });
      if (stock) setActiveStock(stock[0]);
    };
    return unsubscribe();
  }, [ticker, wallet]);

  const handleSellStocks = (e) => {
    setIdToSell(Number(e.target.id));
    handleOpenModal();
  };

  const handleSellAll = () => {
    setIdToSell('all');
    handleOpenModal();
  };

  const handleBuyMore = () => {
    setBuyForm(true);
    setIdToSell(null);
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
          <ButtonsContainer>
            <Button title="Buy more" onClick={handleBuyMore} />
            <Button title="Sell all" onClick={handleSellAll} />
          </ButtonsContainer>
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            {idToSell && idToSell !== 'all' ? (
              <SellStocksForm
                idToSell={idToSell}
                stock={activeStock}
                handleCloseModal={handleCloseModal}
                setIdToSell={setIdToSell}
              />
            ) : null}
            {idToSell === 'all' && (
              <SellAllPositionsForm stock={activeStock} handleCloseModal={handleCloseModal} setIdToSell={setIdToSell} />
            )}
            {buyForm && (
              <BuyStocksForm
                companyName={activeStock.companyName}
                ticker={activeStock.ticker}
                stockIndex={activeStock.index}
                handleCloseModal={handleCloseModal}
              />
            )}
          </Modal>
        </>
      )}
    </Wrapper>
  );
};

export default StockDetails;
