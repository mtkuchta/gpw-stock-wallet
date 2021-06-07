import { Wrapper, StyledTitle, StyledValue } from './StockInfo.style';

const StockInfo = ({ title, value }) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </Wrapper>
  );
};

export default StockInfo;
