import React from 'react';
import { NavWrapper, StyledLink } from './FilteringMenu.style';
import PropTypes from 'prop-types';

const FilteringMenu = React.forwardRef(({ query, items }, ref) => {
  return (
    <NavWrapper ref={ref}>
      {items.map((item) => {
        return (
          <StyledLink key={item} to={`?${query}=${item}`}>
            {item}
          </StyledLink>
        );
      })}
    </NavWrapper>
  );
});

FilteringMenu.propTypes = {
  route: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default FilteringMenu;
