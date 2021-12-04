import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
`;

export const Logo = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  background-color: ${({ theme: { colors } }) => colors.default.backgroundSecondary};
  color: ${({ theme: { colors } }) => colors.default.textColorTitle};
  padding: 10px;
  border-radius: 15px;
  margin: 20px 0;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  transform: scale(0);
  opacity: 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    padding: 20px;
    margin-top: 50px;
  }
`;
