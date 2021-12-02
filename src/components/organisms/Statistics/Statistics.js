import React from 'react';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { StyledText } from './../../molecules/DashboardContainer/DashboardContainer.style';
import { calculateTotalStocksValue } from '../../../assets/helpers/calculateTotalStocksValue';
import { useDatabase } from '../../../hooks/useDatabase';
import { calculateReward } from '../../../assets/helpers/calculateReward';

const Statistics = React.forwardRef((props, ref) => {
  const { wallet, archive, currentYear } = useDatabase();

  const currentYearOperations = archive.filter((item) => {
    const year = item.closeDate.slice(0, 4);
    return Number(year) === currentYear;
  });

  const currentYearReward = calculateCurrentYearReward(currentYearOperations);

  const calculateCurrentYearOpenedPositions = (positions) => {
    let totalPositionsNumber = 0;
    for (const value of Object.values(wallet)) {
      const currentYearPositions = value.positions.filter((item) => {
        const year = item.openDate.slice(0, 4);
        return Number(year) === currentYear;
      });
      totalPositionsNumber += currentYearPositions.length;
    }
    return totalPositionsNumber;
  };

  function calculateCurrentYearReward(operations) {
    const currentYearReward = operations.reduce((accumulator, currentValue) => {
      const reward = calculateReward(
        currentValue.openPrice,
        currentValue.volume,
        currentValue.closePrice,
        currentValue.totalCommission
      );
      return accumulator + reward;
    }, 0);

    return currentYearReward.toFixed(0);
  }

  return (
    <DashboardContainer title="current year statistics" ref={ref}>
      <StyledText>
        Total wallet value: <span>{calculateTotalStocksValue(wallet)} </span>PLN
      </StyledText>
      <StyledText>
        Reward: <span className={currentYearReward < 0 ? 'red' : 'green'}>{currentYearReward}</span> PLN
      </StyledText>
      <StyledText>
        Opened positions: <span>{calculateCurrentYearOpenedPositions(wallet)}</span>
      </StyledText>
      <StyledText>
        Closed positions: <span>{currentYearOperations.length}</span>
      </StyledText>
    </DashboardContainer>
  );
});

export default Statistics;
