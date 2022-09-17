import { Wrapper } from '../Table/Table.style';
import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';
import DataTableComponent from '../DataTableComponent/DataTableComponent';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

const PositionsTable = ({ stock: { positions }, handleSellStocks }) => {
  const windowWidth = useWindowWidth();
  const columns = [
    {
      name: 'Open Date',
      selector: (row) => row.openDate,
      sortable: true,
      minWidth: '60px',
    },
    {
      name: 'Open Price',
      selector: (row) => row.openPrice,
      sortable: true,
      minWidth: '80px',
    },
    {
      name: 'Volume',
      selector: (row) => row.volume,
      sortable: true,
    },
    {
      name: 'Commission',
      selector: (row) => row.commission,
      sortable: true,
    },
    {
      name: 'Value',
      selector: (row) => (row.openPrice * row.volume).toFixed(1),
      sortable: true,
    },
    {
      cell: (row) => <Button small title="sell" onClick={handleSellStocks} id={row.id} />,
    },
  ];

  const columnsMobile = [
    {
      name: 'Open Dt',
      selector: (row) => row.openDate,
      sortable: true,
      minWidth: '70px',
    },
    {
      name: 'Open Pr.',
      selector: (row) => row.openPrice,
      sortable: true,
      minWidth: '70px',
    },
    {
      name: 'Vol.',
      selector: (row) => row.volume,
      sortable: true,
      minWidth: '50px',
    },
    {
      name: 'Value',
      selector: (row) => row.openPrice * row.volume,
      sortable: true,
      minWidth: '60px',
    },
    {
      cell: (row) => <Button small title="sell" onClick={handleSellStocks} id={row.id} />,
      minWidth: '60px',
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.volume > 0,
      classNames: ['noHover'],
    },
  ];

  console.log('jestsm');

  return (
    <Wrapper>
      <DataTableComponent
        columns={windowWidth > 600 ? columns : columnsMobile}
        data={positions}
        conditionalRowStyles={conditionalRowStyles}
      />
    </Wrapper>
  );
};

PositionsTable.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    companyName: PropTypes.string,
    index: PropTypes.string,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        openDate: PropTypes.string,
        volume: PropTypes.number,
        openPrice: PropTypes.number,
        commision: PropTypes.number,
      })
    ),
  }),
  handleOpenModal: PropTypes.func,
};

export default PositionsTable;
