import DataTable, { createTheme } from 'react-data-table-component';
import { customStyles } from './DataTableComponent.style';
import PropTypes from 'prop-types';

createTheme('myTheme', {
  background: {
    default: 'transparent',
  },

  divider: {
    default: 'transparent',
  },
});

const DataTableComponent = ({ data, onRowClick, columns }) => {
  return (
    <DataTable columns={columns} data={data} onRowClicked={onRowClick} theme="myTheme" customStyles={customStyles} pagination />
  );
};

DataTableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onRowClick: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      selector: PropTypes.func,
    })
  ),
};

export default DataTableComponent;
