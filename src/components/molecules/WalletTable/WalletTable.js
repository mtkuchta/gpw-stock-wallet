import { Wrapper } from './WalletTable.style';

const WalletTable = ({ stocksTable }) => {
  console.log(stocksTable);
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
          {stocksTable.map(({ averagePrice, index, name, value, volume }) => (
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
