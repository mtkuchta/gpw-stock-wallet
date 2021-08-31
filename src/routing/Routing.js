import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../views/Dahboard/Dashboard';
import Wallet from '../views/Wallet/Wallet';
import StockDetails from '../views/StockDetails/StockDetails';
import ClosedPositionDetails from '../views/ClosedPositionDetails/ClosedPositionDetails';
import History from '../views/History/History';
import { NavigationPaths } from './NavigationPaths';

const Routing = ({ currentYear }) => {
  return (
    <Switch>
      <Route exact path={NavigationPaths.HOMEPAGE.path}>
        <Redirect to={NavigationPaths.DASHBOARD.path} />
      </Route>
      <Route path={NavigationPaths.DASHBOARD.path}>
        <Dashboard />
      </Route>
      <Route exact path={NavigationPaths.WALLET.index}>
        <Wallet />
      </Route>
      <Route exact path={NavigationPaths.WALLET.path}>
        <Redirect to={NavigationPaths.WALLET.all} />
      </Route>
      <Route exact path={NavigationPaths.WALLET.stock}>
        <StockDetails />
      </Route>
      <Route path={NavigationPaths.HISTORY.details}>
        <ClosedPositionDetails />
      </Route>
      <Route path={NavigationPaths.HISTORY.filtered}>
        <History />
      </Route>
      <Route exact path={NavigationPaths.HISTORY.path}>
        <Redirect to={NavigationPaths.HISTORY.path + '/' + currentYear + '/all'} />
      </Route>
    </Switch>
  );
};

export default Routing;
