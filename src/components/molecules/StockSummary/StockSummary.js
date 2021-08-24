import { Wrapper, InfoContainer } from './StockSummary.style';
import { calculateTotalVolume } from '../../../assets/helpers/calculateTotalVolume';
import { calculateAveragePrice } from '../../../assets/helpers/calculateAveragePrice';

import StockInfo from '../StockInfo/StockInfo';
import PropTypes from 'prop-types';

const StockSummary = ({ stock }) => {
  return (
    <Wrapper>
      <InfoContainer>
        <StockInfo title="Index" value={stock.index} />
        <StockInfo title="Avg Price" value={calculateAveragePrice(stock)} />
        <StockInfo title="Total Volume" value={calculateTotalVolume(stock)} />
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
