import { NavWrapper, StyledLink } from './IndexMenu.style';

const indexList = ['all', 'WIG20', 'mWIG40', 'sWIG80', 'other'];

const IndexMenu = () => {
  return (
    <NavWrapper>
      {indexList.map((item) => {
        return (
          <StyledLink key={item} to={`/wallet/${item}`}>
            {item}
          </StyledLink>
        );
      })}
    </NavWrapper>
  );
};

export default IndexMenu;
