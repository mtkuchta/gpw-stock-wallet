import styled from 'styled-components';

export const StyledError = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.default.textError};
  margin-bottom: 20px;
`;
