import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { calculateReward } from '../../../assets/helpers/calculateReward';
import { useDatabase } from '../../../hooks/useDatabase';
import { Wrapper, StyledReward } from '../Table/Table.style';

const ArchiveTable = () => {
  const { archive } = useDatabase();
  const [matchingItems, setMatchingItems] = useState([]);
  const params = useParams();

  const test = new Date();
  const year = test.getFullYear();
  console.log(year);

  const getMatchingArchiveItems = (archive, param) => {
    if (param === 'all') return archive;
    if (param === 'profit') {
      return archive.filter((item) => calculateReward(item.openPrice, item.volume, item.closePrice, item.totalCommission) >= 0);
    }

    return archive.filter((item) => calculateReward(item.openPrice, item.volume, item.closePrice, item.totalCommission) <= 0);
  };

  useEffect(() => {
    setMatchingItems(getMatchingArchiveItems(archive, params.reward));
  }, [params.reward]);

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
            <th>Profit/Loss [PLN]</th>
          </tr>
        </thead>
        <tbody>
          {archive.length !== 0 &&
            matchingItems.map(({ ticker, closeDate, volume, openPrice, closePrice, totalCommission, id }) => {
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
