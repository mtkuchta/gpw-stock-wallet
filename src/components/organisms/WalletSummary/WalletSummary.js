import { StocksList, ButtonsContainer } from './WalletSummary.style';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import TextInfo from '../../atoms/TextInfo.js/TextInfo';
import Modal from '../Modal/Modal';
import Stock from '../../atoms/Stock/Stock';
import BuyStocksForm from '../BuyStocksForm/BuyStocksForm';
import Button from '../../atoms/Button/Button';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import { useDatabase } from '../../../hooks/useDatabase';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useModal from '../../../hooks/useModal';

const WalletSummary = () => {
  const { wallet } = useDatabase();
  const [stocks, setStocks] = useState([]);
  const [sortedStocks, setSortedStocks] = useState([]);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  let history = useHistory();

  useEffect(() => {
    setSortedStocks(stocks.sort(sortByTotalPositionsValue));
  }, [stocks]);

  useEffect(() => {
    setStocks(Object.values(wallet));
  }, [wallet]);

  const handleClick = (e) => {
    let ticker;
    if (e.target.id) {
      ticker = e.target.id;
    } else {
      ticker = e.target.parentNode.id;
    }

    history.push(`/wallet/stock?ticker=${ticker}`);
  };

  return (
    <DashboardContainer title="stocks">
      {stocks.length === 0 && <TextInfo text="Your wallet is empty" />}
      <StocksList>
        {sortedStocks.map((stock, index) => {
          return <Stock onClick={handleClick} key={index} stock={stock.ticker} index={stock.index} />;
        })}
      </StocksList>
      <ButtonsContainer>
        <Button title="Add Stocks" onClick={handleOpenModal} />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <BuyStocksForm handleCloseModal={handleCloseModal} />
      </Modal>
    </DashboardContainer>
  );
};

export default WalletSummary;
