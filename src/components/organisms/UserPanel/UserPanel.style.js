import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 95%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.default.borderColor};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
