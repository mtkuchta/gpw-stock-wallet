import { Wrapper, StyledMain } from './MainTemplate.style';
import Navigation from '../organisms/Navigation/Navigation';
import UserPanel from '../organisms/UserPanel/UserPanel';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain>
        <UserPanel />
        {children}
      </StyledMain>
    </Wrapper>
  );
};

export default MainTemplate;
