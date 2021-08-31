import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;

  @media (min-width: 1200px) {
    width: 25%;
    padding: 10px 0;
  }
`;

export const StyledTitle = styled.h3`
  padding: 3px 0;
  color: ${({ theme: { colors } }) => colors.default.textHeaders};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  letter-spacing: 1px;

  @media (min-width: 1200px) {
    padding: 10px 0;
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;

export const StyledValue = styled.p`
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  padding-left: 5px;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
