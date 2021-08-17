import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { StyledText } from './../../molecules/DashboardContainer/DashboardContainer.style';
import { calculateTotalStocksValue } from '../../../assets/helpers/calculateTotalStocksValue';
import { useDatabase } from '../../../hooks/useDatabase';

const Statistics = () => {
  const { wallet, archive } = useDatabase();
  return (
    <DashboardContainer title="statistics">
      <StyledText>
        Total stocks value: <span>{calculateTotalStocksValue(wallet)} </span>PLN
      </StyledText>
      <StyledText>Current year reward:</StyledText>
      <StyledText>Opened positions (current year):</StyledText>
      <StyledText>Closed positions (current year):</StyledText>
    </DashboardContainer>
  );
};

export default Statistics;
