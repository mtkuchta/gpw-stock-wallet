import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 95%;
  height: 10%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.default.borderColor};
`;

export const ButtonsContainer = styled.div`
  min-width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
