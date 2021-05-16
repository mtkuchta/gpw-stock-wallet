import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 8%;
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundColorSecondary};

  @media (min-width: 1024px) {
    width: 25%;
    min-width: 300px;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;
    background-color: transparent;
    border-right: 4px solid ${({ theme: { colors } }) => colors.default.borderColor};
  }
`;

export const Logo = styled.div`
  line-height: 100%;
  width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.default.textColorTitle};
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }

  h1:nth-child(2) {
    padding-left: 4px;
  }

  @media (min-width: 1024px) {
    width: 270px;
    height: 140px;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.default.backgroundColorSecondary};
    margin-top: 40px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    h1:nth-child(1) {
      font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
      padding-bottom: 15px;
    }
    h1:nth-child(2) {
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
`;
