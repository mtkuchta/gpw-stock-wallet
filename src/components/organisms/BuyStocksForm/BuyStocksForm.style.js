import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  letter-spacing: 1px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
`;

export const StyledSelect = styled.select`
  padding: 5px;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.default.textPrimary};

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 0 10px 55px;

  p {
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    color: ${({ theme: { colors } }) => colors.default.textHeaders};
    padding-right: 20px;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
