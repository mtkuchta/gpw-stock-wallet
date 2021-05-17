import { useContext } from 'react';
import { UserContext } from '../../../providers/UserProvider';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import { StyledText } from './AccountSummary.style';

const AccountSummary = () => {
  const { deposit } = useContext(UserContext);
  return (
    <DashboardContainer title="account">
      <StyledText>
        Account value: <span>{deposit.amount} </span>PLN
      </StyledText>

      <StyledText>
        Free margin: <span> 2000 </span>PLN
      </StyledText>
      <StyledText></StyledText>
    </DashboardContainer>
  );
};

export default AccountSummary;
