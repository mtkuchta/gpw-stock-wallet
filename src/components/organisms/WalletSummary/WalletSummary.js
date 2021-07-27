import { StocksList } from './WalletSummary.style';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import Stock from '../../atoms/Stock/Stock';
import { useDatabase } from '../../../hooks/useDatabase';
import { useEffect, useState } from 'react';
import TextInfo from '../../atoms/TextInfo.js/TextInfo';

const WalletSummary = () => {
  const { wallet } = useDatabase();
  const [stocks, setStocks] = useState([]);
  const [sortedStocks, setSortedStocks] = useState([]);

  useEffect(() => {
    setSortedStocks(stocks.sort(sortByTotalPositionsValue));
  }, [stocks]);

  useEffect(() => {
    setStocks(Object.values(wallet));
  }, [wallet]);

  return (
    <DashboardContainer title="stocks">
      {stocks.length === 0 && <TextInfo text="Your wallet is empty" />}
      <StocksList>
        {sortedStocks.map((stock, index) => {
          return <Stock key={index} stock={stock.ticker} index={stock.index} />;
        })}
      </StocksList>
    </DashboardContainer>
  );
};

export default WalletSummary;
