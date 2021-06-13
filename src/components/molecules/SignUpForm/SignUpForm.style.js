import styled from 'styled-components';

export const StyledHeader = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  margin-bottom: 10px;
`;
