import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import { sortByTotalPositionsValue } from '../../assets/helpers/sortByTotalPositionsValue';
import { createStockTableData } from '../../assets/helpers/createStockTableData';

import styled from 'styled-components';
import WalletTable from '../../components/molecules/WalletTable/WalletTable';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Wallet = () => {
  const { wallet } = useContext(UserContext);
  const stocks = Object.values(wallet).sort(sortByTotalPositionsValue);
  const stocksTable = createStockTableData(stocks);

  return (
    <Wrapper>
      <WalletTable stocksTable={stocksTable} />
    </Wrapper>
  );
};

export default Wallet;
