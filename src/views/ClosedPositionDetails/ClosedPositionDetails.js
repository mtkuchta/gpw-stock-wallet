import { Wrapper, StyledText, StyledReward, StyledValue } from './ClosedPositionDetails.style';
import StockName from '../../components/atoms/StockName/StockName';
import { calculateReward } from '../../assets/helpers/calculateReward';
import { calculateAbsoluteReward } from '../../assets/helpers/calculateAbsoluteReward';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDatabase } from '../../hooks/useDatabase';

const ClosedPositionDetails = () => {
  const [position, setPosition] = useState(null);
  const [reward, setReward] = useState(0);
  const [absoluteReward, setAbsoluteReward] = useState(0);

  const params = useParams();
  const { archive } = useDatabase();

  useEffect(() => {
    function fetchPosition() {
      const positionIndex = archive.findIndex((item) => {
        return item.id === Number(params.id);
      });
      setPosition(archive[positionIndex]);
    }
    fetchPosition();
  }, []);

  useEffect(() => {
    if (!position) return;
    setReward(calculateReward(position.openPrice, position.volume, position.closePrice, position.totalCommission));
    setAbsoluteReward(
      calculateAbsoluteReward(position.openPrice, position.volume, position.closePrice, position.totalCommission)
    );
  }, [position]);

  return (
    <Wrapper>
      {position && (
        <>
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
        </>
      )}
    </Wrapper>
  );
};

export default ClosedPositionDetails;
