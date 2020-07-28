import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" exact component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
