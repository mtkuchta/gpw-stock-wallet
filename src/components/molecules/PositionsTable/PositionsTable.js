import { Wrapper } from '../Table/Table.style';
import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';

const PositionsTable = ({ stock: { positions } }) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Open Date</th>
            <th>Open Price</th>
            <th>Vol.</th>
            <th>Com.</th>
          </tr>
        </thead>
        <tbody>
          {positions.length != 0 &&
            positions.map(({ id, openDate, openPrice, volume, commission }) => (
              <tr key={id}>
                <td>{openDate}</td>
                <td>{openPrice.toFixed(2)} </td>
                <td>{volume}</td>
                <td>{commission}</td>
                <td>
                  <Button small title="close" />
                </td>
              </tr>
            ))}
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
};

export default PositionsTable;
