import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import MainTemplate from '../components/templates/MainTemplate';
import { UserProvider } from '../providers/UserProvider';
import Dashboard from '../views/Dahboard/Dashboard';

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
              </Switch>
            </Wrapper>
          </MainTemplate>
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
