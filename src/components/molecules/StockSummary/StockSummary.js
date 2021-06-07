import { calculateTotalVolume } from '../../../assets/helpers/calculateTotalVolume';
import { calculateAveragePrice } from '../../../assets/helpers/calculateAveragePrice';
import styled from 'styled-components';
import StockInfo from '../StockInfo/StockInfo';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 2%;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

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

export default StockSummary;
