import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { calculateAbsoluteReward } from '../../../assets/helpers/calculateAbsoluteReward';
import { calculateReward } from '../../../assets/helpers/calculateReward';
import { Wrapper } from '../Table/Table.style';
import DataTableComponent from '../DataTableComponent/DataTableComponent';

const ArchiveTable = ({ archive }) => {
  const [matchingItems, setMatchingItems] = useState([]);
  let history = useHistory();

  const { search } = useLocation();
  const { year, filter } = queryString.parse(search);

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

  const routePath = (row) => {
    const newPath = `/history/details?id=${row.id}`;
    history.push(newPath);
  };

  useEffect(() => {
    setMatchingItems(getMatchingArchiveItems(archive, year, filter));
  }, [filter, year, archive]);

  const columns = [
    {
      name: 'Ticker',
      selector: (row) => row.ticker.toUpperCase(),
      sortable: true,
      minWidth: '50px',
    },
    {
      name: 'Close Date',
      selector: (row) => row.closeDate,
      sortable: true,
      minWidth: '50px',
    },
    {
      name: 'Reward [PLN]',
      selector: (row) => calculateReward(row.openPrice, row.volume, row.closePrice, row.totalCommission),
      conditionalCellStyles: [
        {
          when: (row) => calculateReward(row.openPrice, row.volume, row.closePrice, row.totalCommission) >= 0,
          style: {
            color: 'lightgreen',
          },
        },
        {
          when: (row) => calculateReward(row.openPrice, row.volume, row.closePrice, row.totalCommission) < 0,
          style: {
            color: 'red',
          },
        },
      ],
      sortable: true,
      style: {
        fontWeight: 'bold',
      },
    },
    {
      name: 'Reward [%]',
      cell: (row) => `${calculateAbsoluteReward(row.openPrice, row.volume, row.closePrice, row.totalCommission)} %`,
      conditionalCellStyles: [
        {
          when: (row) => calculateAbsoluteReward(row.openPrice, row.volume, row.closePrice, row.totalCommission) >= 0,
          style: {
            color: 'lightgreen',
          },
        },
        {
          when: (row) => calculateAbsoluteReward(row.openPrice, row.volume, row.closePrice, row.totalCommission) < 0,
          style: {
            color: 'red',
          },
        },
      ],
      sortable: true,
      style: {
        fontWeight: 'bold',
      },
    },
  ];

  return (
    <Wrapper>{matchingItems && <DataTableComponent columns={columns} data={matchingItems} onRowClick={routePath} />}</Wrapper>
  );
};

ArchiveTable.propTypes = {
  archive: PropTypes.array,
};

export default ArchiveTable;
