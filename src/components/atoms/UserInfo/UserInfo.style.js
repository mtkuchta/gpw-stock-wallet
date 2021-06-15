import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    color: ${({ theme: { colors } }) => colors.default.textPrimary};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
  }

  h2 {
    color: ${({ theme: { colors } }) => colors.default.textPrimary};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    letter-spacing: 1px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: ${({ theme: { fontSize } }) => fontSize.s};
    }

    h2 {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
      font-weight: normal;
    }
  }
`;
