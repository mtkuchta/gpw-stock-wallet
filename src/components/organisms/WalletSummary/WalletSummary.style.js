import styled from 'styled-components';

export const StocksList = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 0;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
