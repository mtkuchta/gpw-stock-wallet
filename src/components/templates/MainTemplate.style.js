import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundColorPrimary};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledMain = styled.main`
  width: 75%;
  height: 100%;
`;
