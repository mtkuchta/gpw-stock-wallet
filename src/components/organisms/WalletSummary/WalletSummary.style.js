import styled from 'styled-components';

export const StocksList = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
`;

export const StyledText = styled.p`
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  text-align: center;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
