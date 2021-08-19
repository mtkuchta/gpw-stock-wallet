import { Wrapper, StyledTitle, StyledValue } from './StockInfo.style';
import PropTypes from 'prop-types';

const StockInfo = ({ title, value }) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </Wrapper>
  );
};

StockInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default StockInfo;
