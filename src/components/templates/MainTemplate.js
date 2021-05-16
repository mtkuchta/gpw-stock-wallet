import { Wrapper, StyledMain } from './MainTemplate.style';
import Navigation from '../organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain>{children}</StyledMain>
    </Wrapper>
  );
};

export default MainTemplate;
