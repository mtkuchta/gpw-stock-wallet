import { Wrapper, StyledHeader } from './StockDetails.style';
import StockSummary from '../../molecules/StockSummary/StockSummary';
import PropTypes from 'prop-types';

const StockDetails = ({ stock }) => {
  console.log(stock);
  return (
    <Wrapper>
      <StyledHeader>
        <h2>{stock.ticker}</h2>
        <h3>{stock.companyName} S.A.</h3>
      </StyledHeader>
      <StockSummary stock={stock} />
    </Wrapper>
  );
};

StockDetails.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    companyName: PropTypes.string,
    index: PropTypes.string,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        openDate: PropTypes.string,
        volume: PropTypes.number,
        openPrice: PropTypes.number,
      })
    ),
  }),
};

export default StockDetails;
