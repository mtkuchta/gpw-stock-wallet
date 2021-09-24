import { Wrapper } from './WalletTable.style';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createStockTableData } from '../../../assets/helpers/createStockTableData';
import { getMatchingStocks } from '../../../assets/helpers/getMatchingStocks';
import { useDatabase } from '../../../hooks/useDatabase';
import DataTableComponent from '../DataTable/DataTable';

const WalletTable = () => {
  const params = useParams();
  const { wallet } = useDatabase();
  const [stocksTable, setStocksTable] = useState([]);
  const [matchingStocks, setMatchingStocks] = useState([]);
  let history = useHistory();

  const routePath = (row, e) => {
    e.preventDefault();
    const newPath = `/wallet/stock/${row.id}`;
    history.push(newPath);
  };

  useEffect(() => {
    async function getData() {
      if (wallet) {
        const stocksTable = createStockTableData(wallet);
        await setStocksTable(stocksTable);
        setMatchingStocks(stocksTable);
      }
    }
    getData();
  }, [wallet]);

  useEffect(() => {
    setMatchingStocks(getMatchingStocks(stocksTable, params.index));
  }, [params.index]);

  const columns = [
    { name: 'Ticker', selector: (row) => row.ticker, sortable: true },
    { name: 'Index', selector: (row) => row.index, sortable: true },
    { name: 'Avg Price', selector: (row) => row.averagePrice, sortable: true },
    { name: 'Vol.', selector: (row) => row.volume, sortable: true },
    { name: 'Value.', selector: (row) => row.value, sortable: true },
    { name: 'Wallet %', selector: (row) => row.walletPercent, sortable: true },
  ];

  return (
    <Wrapper>
      <DataTableComponent data={matchingStocks} onRowClick={routePath} columns={columns} />
    </Wrapper>
  );
};

export default WalletTable;
