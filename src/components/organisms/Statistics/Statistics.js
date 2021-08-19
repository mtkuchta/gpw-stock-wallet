import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { StyledText } from './../../molecules/DashboardContainer/DashboardContainer.style';
import { calculateTotalStocksValue } from '../../../assets/helpers/calculateTotalStocksValue';
import { useDatabase } from '../../../hooks/useDatabase';
import { calculateReward } from '../../../assets/helpers/calculateReward';

const Statistics = () => {
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
    <DashboardContainer title="statistics">
      <StyledText>
        Total stocks value: <span>{calculateTotalStocksValue(wallet)} </span>PLN
      </StyledText>
      <StyledText>
        Current year reward: <span className={currentYearReward < 0 ? 'red' : 'green'}>{currentYearReward}</span> PLN
      </StyledText>
      <StyledText>
        Opened positions (current year): <span>{calculateCurrentYearOpenedPositions(wallet)}</span>
      </StyledText>
      <StyledText>
        Closed positions (current year): <span>{currentYearOperations.length}</span>
      </StyledText>
    </DashboardContainer>
  );
};

export default Statistics;
