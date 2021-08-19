import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 75%;
    max-width: 1000px;
  }
`;
