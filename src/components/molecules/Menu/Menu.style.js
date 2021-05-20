import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 8%;
  background-color: ${({ theme: { colors } }) => colors.default.backgroundColorPrimary};
  color: ${({ theme: { colors } }) => colors.default.link};
  border: none;
  transition: 0.6s;
  transform: translateX(-100%);

  &.opened {
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    position: static;
    transform: translateX(0);
    align-items: flex-end;
    padding-right: 20px;
    margin-top: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  text-decoration: none;
  padding: 20px 0;
  transition: transform 0.6s;
  color: ${({ theme: { colors } }) => colors.default.link};
  font-weight: bold;
  letter-spacing: 1px;

  &:visited {
    color: inherit;
  }

  &::first-letter {
    text-transform: uppercase;
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.default.linkActive};
  }

  @media (min-width: 1024px) {
    padding: 10px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    transition: 0.3s;

    &:hover {
      transform: translateX(-15px);
    }

    &.active {
      transform: translateX(-20px);
    }
  }
`;
