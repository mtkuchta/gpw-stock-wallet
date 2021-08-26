import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  width: 100%;
  margin: 12px 0;
  padding: 0 10px;
  display: flex;

  @media (min-width: 1200px) {
    margin: 20px 0;
  }
`;

export const StyledLink = styled(Link)`
  min-width: 50px;
  background-color: ${({ theme: { colors } }) => colors.default.button};
  color: ${({ theme: { colors } }) => colors.default.buttonText};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  margin: 0 5px;
  padding: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  @media (min-width: 1200px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    transition: 0.6s;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.default.buttonHover};
    }
  }
`;
