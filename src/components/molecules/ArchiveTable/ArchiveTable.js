import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { calculateReward } from '../../../assets/helpers/calculateReward';
import { useDatabase } from '../../../hooks/useDatabase';
import { Wrapper, StyledReward } from '../Table/Table.style';

const ArchiveTable = () => {
  const { archive } = useDatabase();
  const [matchingItems, setMatchingItems] = useState([]);
  const params = useParams();

  const getMatchingArchiveItems = (archive, year, reward) => {
    const archiveFilteredByYear = archive.filter((item) => {
      return item.closeDate.slice(0, 4) === year;
    });

    if (reward === 'all') return archiveFilteredByYear;
    if (reward === 'profit') {
      return archiveFilteredByYear.filter(
        (item) => calculateReward(item.openPrice, item.volume, item.closePrice, item.totalCommission) >= 0
      );
    }

    return archiveFilteredByYear.filter(
      (item) => calculateReward(item.openPrice, item.volume, item.closePrice, item.totalCommission) <= 0
    );
  };

  useEffect(() => {
    setMatchingItems(getMatchingArchiveItems(archive, params.year, params.reward));
  }, [params.reward, params.year]);

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
          {matchingItems &&
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
