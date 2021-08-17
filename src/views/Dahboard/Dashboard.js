import { Wrapper } from './Dashboard.style';
import AccountSummary from '../../components/organisms/AccountSummary/AccountSummary';
import WalletSummary from '../../components/organisms/WalletSummary/WalletSummary';
import Statistics from '../../components/organisms/Statistics/Statistics';

const Dashboard = () => {
  return (
    <Wrapper>
      <AccountSummary />
      <WalletSummary />
      <Statistics />
    </Wrapper>
  );
};

export default Dashboard;
