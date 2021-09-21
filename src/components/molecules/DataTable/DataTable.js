import DataTable from 'react-data-table-component';
import { theme } from '../../../assets/styles/theme';

const columns = [
  { name: 'Ticker', selector: (row) => row.ticker, sortable: true },
  { name: 'Index', selector: (row) => row.index, sortable: true },
  { name: 'Avg Price', selector: (row) => row.averagePrice, sortable: true },
  { name: 'Vol.', selector: (row) => row.volume, sortable: true },
  { name: 'Value.', selector: (row) => row.value, sortable: true },
  { name: 'Wallet %', selector: (row) => row.walletPercent, sortable: true },
];

const customStyles = {
  rows: {
    style: {
      backgroundColor: theme.colors.default.backgroundPrimary,
      fontSize: theme.fontSize.xs,
      cursor: 'pointer',
      '&:nth-child(odd)': {
        backgroundColor: theme.colors.default.tableRow,
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: theme.colors.default.backgroundPrimary,
      color: theme.colors.default.textHeaders,
      fontWeight: 'bold',
    },
  },
};

const DataTableComponent = ({ data, onRowClick }) => {
  return <DataTable columns={columns} data={data} onRowClicked={onRowClick} customStyles={customStyles} />;
};

export default DataTableComponent;
