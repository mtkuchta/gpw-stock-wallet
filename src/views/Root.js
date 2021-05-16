import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import MainTemplate from '../components/templates/MainTemplate';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard">lalalala</Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
