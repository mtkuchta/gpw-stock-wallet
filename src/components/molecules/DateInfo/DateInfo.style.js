import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (min-width: 1200px) {
    width: 65%;
  }
`;

export const StyledDate = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.default.textPrimary};

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
`;

export const StyledClock = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-weight: bold;
  letter-spacing: 1px;

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    letter-spacing: 2px;
  }
`;
