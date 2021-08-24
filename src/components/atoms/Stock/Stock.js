import { Wrapper, StyledName, StyledIndex } from './Stock.style';
import PropTypes from 'prop-types';

const Stock = ({ stock, index, onClick }) => {
  return (
    <Wrapper onClick={onClick} id={stock}>
      <StyledName>{stock.toUpperCase()}</StyledName>
      {index !== 'none' && <StyledIndex color={index}>{index}</StyledIndex>}
    </Wrapper>
  );
};

Stock.propTypes = {
  stock: PropTypes.string,
  index: PropTypes.string,
  onClick: PropTypes.func,
};

export default Stock;
