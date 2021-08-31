import { Wrapper } from './Root.style';
import MainTemplate from '../components/templates/MainTemplate';
import Login from './Login/Login';
import Routing from '../routing/Routing';
import { useAuth } from '../hooks/useAuth';
import { useDatabase } from '../hooks/useDatabase';

const AuthenticatedApp = () => {
  const { currentYear } = useDatabase();
  return (
    <MainTemplate>
      <Wrapper>
        <Routing currentYear={currentYear} />
      </Wrapper>
    </MainTemplate>
  );
};

function Root() {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <Login />;
}

export default Root;
