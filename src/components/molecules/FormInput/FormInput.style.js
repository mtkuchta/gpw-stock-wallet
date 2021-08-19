import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  margin: 5px 0;

  p {
    position: absolute;
    top: 0;
    left: 5%;
    opacity: 0;
    color: ${({ theme: { colors } }) => colors.default.textHeaders};
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    font-weight: bold;
    transition: 0.5s;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  width: 250px;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
  border: none;
  padding: 8px 15px;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  letter-spacing: 1px;
  z-index: -1;
  padding-top: 20px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.default.borderColor};
  position: relative;

  &::placeholder {
    font-weight: 300;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }

    & ~ p {
      display: block;
      opacity: 1;
    }
  }
`;
