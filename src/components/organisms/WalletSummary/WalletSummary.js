import { StocksList } from './WalletSummary.style';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import Stock from '../../atoms/Stock/Stock';
import { useDatabase } from '../../../hooks/useDatabase';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInfo from '../../atoms/TextInfo.js/TextInfo';

const WalletSummary = () => {
  const { wallet } = useDatabase();
  const [stocks, setStocks] = useState([]);
  const [sortedStocks, setSortedStocks] = useState([]);
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

    history.push(`/wallet/stock/${ticker}`);
  };

  return (
    <DashboardContainer title="stocks">
      {stocks.length === 0 && <TextInfo text="Your wallet is empty" />}
      <StocksList>
        {sortedStocks.map((stock, index) => {
          return <Stock onClick={handleClick} key={index} stock={stock.ticker} index={stock.index} />;
        })}
      </StocksList>
    </DashboardContainer>
  );
};

export default WalletSummary;
