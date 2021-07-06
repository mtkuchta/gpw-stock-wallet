import { NavWrapper, StyledLink } from './FilteringMenu.style';

const FilteringMenu = ({ route, items }) => {
  return (
    <NavWrapper>
      {items.map((item) => {
        return (
          <StyledLink key={item} to={`/${route}/${item}`}>
            {item}
          </StyledLink>
        );
      })}
    </NavWrapper>
  );
};

export default FilteringMenu;
