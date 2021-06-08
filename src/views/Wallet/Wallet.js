import { useState, useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import { Wrapper } from './Wallet.style';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';
import IndexMenu from '../../components/molecules/IndexMenu/IndexMenu';
import useModal from '../../hooks/useModal';

const Wallet = () => {
  const { wallet } = useContext(UserContext);

  return (
    <Wrapper>
      <IndexMenu />
      <WalletTable />
    </Wrapper>
  );
};

export default Wallet;
