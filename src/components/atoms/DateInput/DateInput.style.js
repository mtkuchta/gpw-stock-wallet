import styled from 'styled-components';

export const StyledDate = styled.input`
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.default.textHeaders};
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const DateContainer = styled.div`
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
