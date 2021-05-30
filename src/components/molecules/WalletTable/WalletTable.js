import { Wrapper } from './WalletTable.style';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';
import { sortByTotalPositionsValue } from '../../../assets/helpers/sortByTotalPositionsValue';
import { createStockTableData } from '../../../assets/helpers/createStockTableData';
import { getMatchingStocks } from '../../../assets/helpers/getMatchingStocks';

const WalletTable = () => {
  const params = useParams();
  const { wallet } = useContext(UserContext);
  const [stocksTable, setStocksTable] = useState([]);
  const [matchingStocks, setMatchingStocks] = useState([]);

  useEffect(async () => {
    const stocks = Object.values(wallet).sort(sortByTotalPositionsValue);
    const stocksTable = createStockTableData(stocks);
    await setStocksTable(stocksTable);
    setMatchingStocks(stocksTable);
  }, []);

  useEffect(() => {
    setMatchingStocks(getMatchingStocks(stocksTable, params.index));
  }, [params]);

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Index</th>
            <th>Avg Price</th>
            <th>Vol.</th>
            <th>Value [PLN]</th>
          </tr>
        </thead>
        <tbody>
          {matchingStocks.map(({ averagePrice, index, name, value, volume }) => (
            <tr key={name}>
              <td>{name}</td>
              <td color={index}>{index}</td>
              <td>{averagePrice}</td>
              <td>{volume}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default WalletTable;