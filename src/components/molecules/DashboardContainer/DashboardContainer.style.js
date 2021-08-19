import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  border: 2px solid ${({ theme: { colors } }) => colors.default.borderColor};
  border-radius: 10px;
  margin: 10px 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 10px 12px;
`;

export const ContainerTitle = styled.h2`
  width: 100%;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.default.textHeaders};
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 1px;
  }
`;

export const StyledText = styled.h3`
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: normal;
  letter-spacing: 1px;
  margin: 10px 0;
  span {
    font-weight: bold;

    &.red {
      color: red;
    }
    &.green {
      color: lightgreen;
    }
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
