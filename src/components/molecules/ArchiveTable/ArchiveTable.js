import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { calculateAbsoluteReward } from '../../../assets/helpers/calculateAbsoluteReward';
import { calculateReward } from '../../../assets/helpers/calculateReward';
import { Wrapper, StyledReward } from '../Table/Table.style';
import TextInfo from '../../atoms/TextInfo.js/TextInfo';

const ArchiveTable = ({ openModal, archive }) => {
  const [matchingItems, setMatchingItems] = useState([]);
  const params = useParams();
  let history = useHistory();

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

  const reoutePath = (e) => {
    const newPath = `/history/details/${e.target.parentNode.id}`;
    history.push(newPath);
  };

  useEffect(() => {
    setMatchingItems(getMatchingArchiveItems(archive, params.year, params.reward));
  }, [params.reward, params.year, archive]);

  return (
    <Wrapper>
      {matchingItems.length === 0 && <TextInfo text={'No matching transactions'} />}
      {matchingItems.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Close Date</th>
              <th>Profit/Loss [PLN]</th>
              <th>Profit/Loss [%]</th>
            </tr>
          </thead>
          <tbody>
            {matchingItems &&
              matchingItems.map(({ ticker, closeDate, volume, openPrice, closePrice, totalCommission, id }) => {
                const reward = calculateReward(openPrice, volume, closePrice, totalCommission);
                const absoluteReward = calculateAbsoluteReward(openPrice, volume, closePrice, totalCommission);
                return (
                  <tr className="active" key={id} id={id} onClick={reoutePath}>
                    <td>{ticker}</td>
                    <td>{closeDate}</td>
                    <td>
                      <StyledReward color={reward >= 0 ? 'lightgreen' : 'red'}>{reward}</StyledReward>
                    </td>
                    <td>
                      <StyledReward color={absoluteReward >= 0 ? 'lightgreen' : 'red'}>{absoluteReward}%</StyledReward>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

ArchiveTable.propTypes = {
  openModal: PropTypes.func,
  archive: PropTypes.array,
};

export default ArchiveTable;
