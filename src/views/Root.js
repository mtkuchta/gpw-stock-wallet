import { Wrapper } from './Root.style';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Dashboard from '../views/Dahboard/Dashboard';
import Wallet from '../views/Wallet/Wallet';
import StockDetails from '../views/StockDetails/StockDetails';
import History from './History/History';
import Login from './Login/Login';
import { useAuth } from '../hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/wallet/:index">
            <Wallet />
          </Route>
          <Route exact path="/wallet/">
            <Redirect to="/wallet/all" />
          </Route>
          <Route exact path="/wallet/stock/:ticker">
            <StockDetails />
          </Route>
          <Route path="/history/:reward">
            <History />
          </Route>
          <Route path="/history">
            <Redirect to="/history/all" />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

function Root() {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <Login />;
}

export default Root;
