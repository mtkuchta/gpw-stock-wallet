import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import MainTemplate from '../components/templates/MainTemplate';
import { UserProvider } from '../providers/UserProvider';
import Dashboard from '../views/Dahboard/Dashboard';
import Wallet from '../views/Wallet/Wallet';
import StockDetails from '../views/StockDetails/StockDetails';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserProvider>
          <MainTemplate>
            <Wrapper>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/dashboard" />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/wallet/:index">
                  <Wallet />
                </Route>
                <Route exact path="/wallet/">
                  <Redirect to="/wallet/all" />
                </Route>
                <Route path="/stock/:ticker">
                  <StockDetails />
                </Route>
              </Switch>
            </Wrapper>
          </MainTemplate>
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
