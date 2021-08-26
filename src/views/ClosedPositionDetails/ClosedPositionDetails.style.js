import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

export const StyledText = styled.p`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  align-items: center;
  padding: 10px 0;

  @media (min-width: 1200px) {
    width: 30%;
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;

export const StyledValue = styled.span`
  color: ${({ theme: { colors } }) => colors.default.textHeaders};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  padding-top: 5px;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;

export const StyledReward = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 5px;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
