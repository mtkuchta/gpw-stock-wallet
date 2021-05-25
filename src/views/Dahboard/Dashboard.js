import { Wrapper } from './Dashboard.style';
import AccountSummary from '../../components/organisms/AccountSummary/AccountSummary';
import WalletSummary from '../../components/organisms/WalletSummary/WalletSummary';

const Dashboard = () => {
  return (
    <Wrapper>
      <AccountSummary />
      <WalletSummary />
    </Wrapper>
  );
};

export default Dashboard;
