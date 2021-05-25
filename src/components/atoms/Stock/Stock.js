import { Wrapper, StyledName, StyledIndex } from './Stock.style';

const Stock = ({ stock, index }) => {
  return (
    <Wrapper>
      <StyledName>{stock.toUpperCase()}</StyledName>
      {index != 'none' && <StyledIndex color={index}>{index}</StyledIndex>}
    </Wrapper>
  );
};

export default Stock;
