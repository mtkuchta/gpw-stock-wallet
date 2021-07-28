import { Wrapper, StyledText, StyledReward, StyledValue } from './ClosedPositionDetails.style';
import StockName from '../../atoms/StockName/StockName';
import { calculateReward } from '../../../assets/helpers/calculateReward';
import { calculateAbsoluteReward } from '../../../assets/helpers/calculateAbsoluteReward';

const ClosedPositionDetails = ({ position }) => {
  const reward = calculateReward(position.openPrice, position.volume, position.closePrice, position.totalCommission);
  const absoluteReward = calculateAbsoluteReward(
    position.openPrice,
    position.volume,
    position.closePrice,
    position.totalCommission
  );
  return (
    <Wrapper>
      <StockName>
        <h2>{position.ticker}</h2>
        <h3>{position.companyName} S.A.</h3>
      </StockName>

      <StyledText>
        Open Date:<StyledValue>{position.openDate}</StyledValue>
      </StyledText>
      <StyledText>
        Open Price:<StyledValue>{position.openPrice} PLN</StyledValue>
      </StyledText>
      <StyledText>
        Close Date:<StyledValue>{position.closeDate} </StyledValue>
      </StyledText>
      <StyledText>
        Close Price:<StyledValue>{position.closePrice} PLN</StyledValue>
      </StyledText>
      <StyledText>
        Volume:<StyledValue>{position.volume}</StyledValue>
      </StyledText>
      <StyledText>
        Total Commission:<StyledValue>{position.totalCommission} PLN</StyledValue>
      </StyledText>
      <StyledText>
        Profit/Loss:<StyledReward color={reward >= 0 ? 'lightgreen' : 'red'}>{reward} PLN</StyledReward>
      </StyledText>
      <StyledText>
        Profit/Loss:<StyledReward color={absoluteReward >= 0 ? 'lightgreen' : 'red'}>{absoluteReward} %</StyledReward>
      </StyledText>
    </Wrapper>
  );
};

export default ClosedPositionDetails;
