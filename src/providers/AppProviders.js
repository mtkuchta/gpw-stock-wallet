import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { AuthProvider } from '../hooks/useAuth';
import { DatabaseProvider } from '../hooks/useDatabase';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DatabaseProvider>
            <GlobalStyle />
            {children}
          </DatabaseProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
