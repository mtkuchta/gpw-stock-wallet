import { NavWrapper, StyledLink } from './FilteringMenu.style';
import PropTypes from 'prop-types';

const FilteringMenu = ({ query, items }) => {
  return (
    <NavWrapper>
      {items.map((item) => {
        return (
          <StyledLink key={item} to={`?${query}=${item}`}>
            {/* <StyledLink key={item} to={`/${route}/${item}`}></StyledLink> */}
            {item}
          </StyledLink>
        );
      })}
    </NavWrapper>
  );
};

FilteringMenu.propTypes = {
  route: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default FilteringMenu;
