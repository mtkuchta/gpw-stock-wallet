import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  opacity: 0;

  span {
    color: ${({ theme: { colors } }) => colors.default.textPrimary};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    padding: 0 10px;
  }

  @media (min-width: 1200px) {
    span {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
  }
`;
