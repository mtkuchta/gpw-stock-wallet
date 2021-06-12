import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { UserProvider } from './UserProvider';
import { AuthProvider } from '../hooks/useAuth';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
