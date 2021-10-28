import { Wrapper, StyledLink } from './Menu.style';
import PropTypes from 'prop-types';

const routes = ['dashboard', 'wallet', 'dividends', 'history', 'taxes'];

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

Menu.propTypes = {
  isOpen: PropTypes.bool,
  handleIsOpen: PropTypes.func,
};

export default Menu;
