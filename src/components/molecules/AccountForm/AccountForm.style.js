import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 100%;
    margin-bottom: 20px;
    padding-left: 10px;
    color: ${({ theme: { colors } }) => colors.default.textColorPrimary};
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    letter-spacing: 1px;
    font-weight: normal;
  }

  div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
  }
`;

export const StyledInput = styled.input`
  width: 150px;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  background-color: ${({ theme: { colors } }) => colors.default.inputBackground};
  border: none;
  border-radius: 15px;
  padding: 8px 15px;
  text-align: right;
  color: ${({ theme: { colors } }) => colors.default.textColorPrimary};
  font-weight: bold;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  padding-left: 15px;
  color: ${({ theme: { colors } }) => colors.default.textColorPrimary};
  letter-spacing: 1px;
`;
