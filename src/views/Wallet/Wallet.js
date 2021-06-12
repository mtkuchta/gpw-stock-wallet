import { Wrapper } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import IndexMenu from '../../components/molecules/IndexMenu/IndexMenu';

const Wallet = () => {
  return (
    <Wrapper>
      <IndexMenu />
      <WalletTable />
    </Wrapper>
  );
};

export default Wallet;
