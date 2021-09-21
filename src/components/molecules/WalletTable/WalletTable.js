import { Wrapper } from '../Table/Table.style';
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

  return (
    <Wrapper>
      {/* <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Index</th>
            <th>Avg Price</th>
            <th>Vol.</th>
            <th>Value [PLN]</th>
            <th>Wallet %</th>
          </tr>
        </thead>
        <tbody>
          {matchingStocks.length !== 0 &&
            matchingStocks.map(({ averagePrice, index, ticker, value, volume }) => (
              <tr className="active" key={ticker} id={ticker} onClick={routePath}>
                <td>{ticker}</td>
                <td color={index}>{index}</td>
                <td>{averagePrice}</td>
                <td>{volume}</td>
                <td>{value}</td>
                <td>{((value * 100) / totalWalletValue).toFixed(1)}%</td>
              </tr>
            ))}
        </tbody>
      </table> */}
      <DataTableComponent data={matchingStocks} onRowClick={routePath} />
    </Wrapper>
  );
};

export default WalletTable;
