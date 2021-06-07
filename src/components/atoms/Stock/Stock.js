import { Wrapper, StyledName, StyledIndex } from './Stock.style';
import PropTypes from 'prop-types';

const Stock = ({ stock, index }) => {
  return (
    <Wrapper>
      <StyledName>{stock.toUpperCase()}</StyledName>
      {index !== 'other' && <StyledIndex color={index}>{index}</StyledIndex>}
    </Wrapper>
  );
};

Stock.propTypes = {
  stock: PropTypes.string,
  index: PropTypes.string,
};

export default Stock;
