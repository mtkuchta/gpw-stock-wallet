import { calculateReward } from '../../../assets/helpers/calculateReward';
import { useDatabase } from '../../../hooks/useDatabase';
import { Wrapper, StyledReward } from '../Table/Table.style';

const ArchiveTable = () => {
  const { archive } = useDatabase();

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Close Date</th>
            <th>Volume</th>
            <th>Open Price</th>
            <th>Close Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {archive.length !== 0 &&
            archive.map(({ ticker, closeDate, volume, openPrice, closePrice, totalCommission, id }) => {
              const reward = calculateReward(openPrice, volume, closePrice, totalCommission);

              return (
                <tr className="active" key={id}>
                  <td>{ticker}</td>
                  <td>{closeDate}</td>
                  <td>{volume}</td>
                  <td>{openPrice}</td>
                  <td>{closePrice}</td>
                  <td>
                    <StyledReward color={reward >= 0 ? 'lightgreen' : 'red'}>{reward}</StyledReward>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ArchiveTable;
