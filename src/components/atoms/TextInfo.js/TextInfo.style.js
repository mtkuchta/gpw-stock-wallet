import styled from 'styled-components';

export const StyledText = styled.p`
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  text-align: center;
  padding: 10px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
