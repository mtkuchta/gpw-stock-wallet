import styled from 'styled-components';

export const StyledText = styled.h3`
  color: ${({ theme: { colors } }) => colors.default.textColorPrimary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: normal;
  letter-spacing: 1px;
  margin: 10px 0;
  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
