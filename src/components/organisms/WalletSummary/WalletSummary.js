import { StocksList } from './WalletSummary.style';
import { useContext } from 'react';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';

import { UserContext } from '../../../providers/UserProvider';
import Stock from '../../atoms/Stock/Stock';

const WalletSummary = () => {
  const { wallet } = useContext(UserContext);

  const stocks = Object.values(wallet);
  const sortedStocks = stocks.sort(sortByTotalPositionsValue);

  return (
    <DashboardContainer title="stocks">
      <StocksList>
        {sortedStocks.map((stock, index) => {
          return <Stock key={index} stock={stock.ticker} index={stock.index} />;
        })}
      </StocksList>
    </DashboardContainer>
  );
};

export default WalletSummary;
