import { clearConfigCache } from 'prettier';
import { set } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 45%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme: { colors } }) => colors.default.stockBorder};
  border-radius: 6px;
  margin: 5px 5px;
  padding: 5px;
`;

const StyledIndex = styled.div`
  color: ${({ theme: { colors }, color }) => colors.default[color]};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: bold;
`;

const StyledName = styled.h3`
  color: ${({ theme: { colors } }) => colors.default.textColorPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

const Stock = ({ stock, index }) => {
  return (
    <Wrapper>
      <StyledName>{stock.toUpperCase()}</StyledName>
      {index != 'none' && <StyledIndex color={index}>{index}</StyledIndex>}
    </Wrapper>
  );
};

export default Stock;
