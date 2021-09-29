import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.header`
  width: 100%;
  padding: 5px 0;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};

  h2 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }

  h3 {
    width: 100%;
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    text-align: center;
    letter-spacing: 1px;
    margin: 3px 0;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (min-width: 1200px) {
    padding: 15px 0;

    h2 {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }

    h3 {
      font-size: ${({ theme: { fontSize } }) => fontSize.m};
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
