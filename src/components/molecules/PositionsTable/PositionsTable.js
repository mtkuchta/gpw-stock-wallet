import { Wrapper } from '../Table/Table.style';
import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';

const PositionsTable = ({ stock: { positions }, handleSellStocks }) => {
  const isDesktop = window.innerWidth >= 1200 ? true : false;
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Open Date</th>
            <th>Open Price</th>
            <th>Vol.</th>
            {isDesktop && <th>Com.</th>}
            <th>{'Val. [PLN]'}</th>
          </tr>
        </thead>
        <tbody>
          {positions.length !== 0 &&
            positions.map(({ id, openDate, openPrice, volume, commission }) => {
              const value = openPrice * volume;
              return (
                <tr key={id}>
                  <td>{openDate}</td>
                  <td>{openPrice.toFixed(2)} </td>
                  <td>{volume}</td>
                  {isDesktop && <td>{commission}</td>}
                  <td>{value.toFixed(1)}</td>
                  <td>
                    <Button small title="sell" onClick={handleSellStocks} id={id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
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
