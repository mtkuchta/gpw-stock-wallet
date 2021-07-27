import { Wrapper } from './ClosedPositionDetails.style';
import StockName from '../../atoms/StockName/StockName';

const ClosedPositionDetails = ({ position }) => {
  return (
    <Wrapper>
      <StockName>
        <h2>{position.ticker}</h2>
        <h3>{position.companyName} S.A.</h3>
      </StockName>
    </Wrapper>
  );
};

export default ClosedPositionDetails;
