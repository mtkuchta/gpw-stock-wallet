import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 125px;
  height: 32px;
  margin: 0 5px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.default.buttonText};
  border-radius: 16px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.default.button};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  letter-spacing: 1px;

  @media (min-width: 1024px) {
    width: 160px;
    height: 36px;
    margin: 0 20px;
    border-radius: 18px;
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }

  @media (min-width: 1200px) {
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.default.buttonHover};
    }
  }
`;
