import { Wrapper } from '../Table/Table.style';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import { createStockTableData } from '../../../assets/helpers/createStockTableData';
import { getMatchingStocks } from '../../../assets/helpers/getMatchingStocks';
import { useDatabase } from '../../../hooks/useDatabase';
import { calculateTotalStocksValue } from '../../../assets/helpers/calculateTotalStocksValue';

const WalletTable = () => {
  const params = useParams();
  const { wallet } = useDatabase();
  const [stocksTable, setStocksTable] = useState([]);
  const [matchingStocks, setMatchingStocks] = useState([]);
  let history = useHistory();
  const totalWalletValue = calculateTotalStocksValue(wallet);

  const routePath = (e) => {
    e.preventDefault();
    const newPath = `/wallet/stock/${e.target.parentNode.id}`;
    history.push(newPath);
  };

  useEffect(() => {
    async function getData() {
      if (wallet) {
        const stocks = Object.values(wallet).sort(sortByTotalPositionsValue);
        const stocksTable = createStockTableData(stocks);
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
      <table>
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
            matchingStocks.map(({ averagePrice, index, name, value, volume }) => (
              <tr className="active" key={name} id={name} onClick={routePath}>
                <td>{name}</td>
                <td color={index}>{index}</td>
                <td>{averagePrice}</td>
                <td>{volume}</td>
                <td>{value}</td>
                <td>{((value * 100) / totalWalletValue).toFixed(1)}%</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default WalletTable;
