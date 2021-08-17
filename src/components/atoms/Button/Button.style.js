import styled from 'styled-components';

export const StyledButton = styled.button`
  /* width: ${({ small }) => (small ? '60px' : '125px')}; */
  min-width: 60px;
  height: ${({ small }) => (small ? '20px' : '28px')};
  margin: 0 5px;
  font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.xs : fontSize.s)};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.default.buttonText};
  border-radius: 6px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.default.button};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1024px) {
    /* width: 160px; */
    height: ${({ small }) => (small ? '26px' : '36px')};
    margin: 0 20px;
    border-radius: 8px;
    font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.s : fontSize.m)};
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.default.buttonHover};
    }
  }
`;
