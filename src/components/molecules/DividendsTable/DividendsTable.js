import React from 'react';
import { Wrapper } from './DividendsTable.style';
import { useDatabase } from '../../../hooks/useDatabase';
import DataTableComponent from '../DataTableComponent/DataTableComponent';
import { useEffect, useState } from 'react/cjs/react.development';

const DividendsTable = React.forwardRef((prop, ref) => {
  const { dividends } = useDatabase();
  const [data, setData] = useState([]);

  const createDividendsTable = (dividends) => {
    const dividendsTable = [];
    if (Object.keys(dividends).length !== 0) {
      for (const [key, value] of Object.entries(dividends)) {
        dividendsTable.push(value);
      }
    }

    return dividendsTable;
  };

  useEffect(() => {
    setData(createDividendsTable(dividends));
    console.log(dividends);
  }, [dividends]);

  const columns = [
    { name: 'Company Name', selector: (row) => row.companyName, sortable: true, minWidth: '60px' },
    { name: 'Date', selector: (row) => row.date, sortable: true, minWidth: '60px' },
    { name: 'Net amount', selector: (row) => row.netAmount, sortable: true, minWidth: '80px' },
    { name: 'Tax.', selector: (row) => row.tax, sortable: true, minWidth: '50px' },
  ];
  return (
    <Wrapper ref={ref}>
      <DataTableComponent data={data} columns={columns} />
    </Wrapper>
  );
});
export default DividendsTable;
