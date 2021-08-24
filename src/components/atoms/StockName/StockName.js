import { StyledHeader } from './StockName.style';
import PropTypes from 'prop-types';

const StockName = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

StockName.propTypes = {
  children: PropTypes.node,
};

export default StockName;
