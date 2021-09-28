import { Wrapper } from './WalletTable.style';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createStockTableData } from '../../../assets/helpers/createStockTableData';
import { getMatchingStocks } from '../../../assets/helpers/getMatchingStocks';
import { useDatabase } from '../../../hooks/useDatabase';
import DataTableComponent from '../DataTableComponent/DataTableComponent';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import queryString from 'query-string';

const WalletTable = () => {
  const { wallet } = useDatabase();
  const [stocksTable, setStocksTable] = useState([]);
  const [matchingStocks, setMatchingStocks] = useState([]);
  const { search } = useLocation();
  const { index } = queryString.parse(search);
  let history = useHistory();
  const width = useWindowWidth();

  const routePath = (row, e) => {
    e.preventDefault();
    const newPath = `/wallet/stock?ticker=${row.id}`;
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
    setMatchingStocks(getMatchingStocks(stocksTable, index));
  }, [index, stocksTable]);

  const columns = [
    { name: 'Ticker', selector: (row) => row.ticker, sortable: true, minWidth: '60px' },
    { name: 'Index', selector: (row) => row.index, sortable: true, minWidth: '60px' },
    { name: 'Avg Price', selector: (row) => row.averagePrice, sortable: true, minWidth: '80px' },
    { name: 'Vol.', selector: (row) => row.volume, sortable: true, minWidth: '50px' },
    { name: 'Value', selector: (row) => row.value, sortable: true, minWidth: '60px' },
    { name: 'Wallet %', selector: (row) => row.walletPercent, sortable: true },
  ];

  const columnsMobile = [
    { name: 'Ticker', selector: (row) => row.ticker, sortable: true, minWidth: '60px' },
    { name: 'Avg Price', selector: (row) => row.averagePrice, sortable: true, minWidth: '80px' },
    { name: 'Vol.', selector: (row) => row.volume, sortable: true, minWidth: '50px' },
    { name: 'Wallet %', selector: (row) => row.walletPercent, sortable: true },
  ];

  return (
    <Wrapper>
      <DataTableComponent data={matchingStocks} onRowClick={routePath} columns={width >= 600 ? columns : columnsMobile} />
    </Wrapper>
  );
};

export default WalletTable;
