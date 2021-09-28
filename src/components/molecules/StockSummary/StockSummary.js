import { Wrapper, InfoContainer } from './StockSummary.style';
import { calculateTotalVolume } from '../../../assets/helpers/calculateTotalVolume';
import { calculateAveragePrice } from '../../../assets/helpers/calculateAveragePrice';
import StockInfo from '../StockInfo/StockInfo';
import PropTypes from 'prop-types';

const StockSummary = ({ stock }) => {
  const calculateTotalStockValue = (stock) => {
    const totalValue = stock.positions.reduce((prev, value) => {
      return prev + value.openPrice * value.volume;
    }, 0);
    return totalValue.toFixed(1);
  };

  return (
    <Wrapper>
      <InfoContainer>
        <StockInfo title="Index" value={stock.index} />
        <StockInfo title="Total Volume" value={calculateTotalVolume(stock)} />
        <StockInfo title="Avg Price [PLN]" value={calculateAveragePrice(stock)} />
        <StockInfo title="Total value [PLN]" value={calculateTotalStockValue(stock)} />
      </InfoContainer>
    </Wrapper>
  );
};

StockSummary.propTypes = {
  stock: PropTypes.shape({
    companyName: PropTypes.string,
    index: PropTypes.string,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        commission: PropTypes.number,
        id: PropTypes.number,
        openDate: PropTypes.string,
        openPrice: PropTypes.number,
        volume: PropTypes.number,
      })
    ),
    ticker: PropTypes.string,
  }),
};

export default StockSummary;
