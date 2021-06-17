import { StocksList } from './WalletSummary.style';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import Stock from '../../atoms/Stock/Stock';
import { useDatabase } from '../../../hooks/useDatabase';

const WalletSummary = () => {
  const { wallet } = useDatabase();

  const stocks = Object.values(wallet);
  const sortedStocks = stocks.sort(sortByTotalPositionsValue);

  return (
    <DashboardContainer title="stocks">
      {stocks.length === 0 && `Your wallet is empty`}
      <StocksList>
        {sortedStocks.map((stock, index) => {
          return <Stock key={index} stock={stock.ticker} index={stock.index} />;
        })}
      </StocksList>
    </DashboardContainer>
  );
};

export default WalletSummary;
