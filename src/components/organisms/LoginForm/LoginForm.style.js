import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  /* transform: scale(0);
  opacity: 1; */

  div {
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    color: ${({ theme: { colors } }) => colors.default.textPrimary};

    span {
      color: ${({ theme: { colors } }) => colors.default.linkActive};
    }
  }

  @media (min-width: 1200px) {
    span {
      cursor: pointer;
    }
  }
`;

export const StyledHeader = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  letter-spacing: 1px;
  font-weight: normal;

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 35px;
`;

export const StyledInput = styled.input`
  width: 70%;
  margin: 10px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  background-color: ${({ theme: { colors } }) => colors.default.inputBackground};
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }

  @media (min-width: 1200px) {
    /* width: 25%; */
    max-width: 300px;
  }
`;
