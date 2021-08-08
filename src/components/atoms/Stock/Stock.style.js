import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme: { colors } }) => colors.default.stockBorder};
  border-radius: 6px;
  margin: 5px 5px;
  padding: 5px;
  transition: 0.5s;

  @media (min-width: 1200px) {
    width: 22%;
    height: 35px;
    margin: 10px 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme: { colors } }) => colors.default.textHeaders};
    }
  }
`;

export const StyledIndex = styled.div`
  color: ${({ theme: { colors }, color }) => colors.default[color]};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: bold;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
  }
`;

export const StyledName = styled.h3`
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
