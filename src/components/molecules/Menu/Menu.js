import { Wrapper, StyledLink } from './Menu.style';

const routes = ['dashboard', 'wallet', 'history', 'taxes'];

const Menu = ({ isOpen, handleIsOpen }) => {
  return (
    <Wrapper className={isOpen ? 'opened' : ''}>
      {routes.map((route, index) => {
        return (
          <StyledLink key={index} to={`/${route}`} onClick={handleIsOpen}>
            {route}
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

export default Menu;
