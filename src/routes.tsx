import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';
import MainRoute from './components/MainRoute';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import App from './pages/App';
import Profile from './pages/Profile';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <MainRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
