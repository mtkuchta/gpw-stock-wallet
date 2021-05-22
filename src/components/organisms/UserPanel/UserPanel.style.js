import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 95%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.default.borderColor};
`;
