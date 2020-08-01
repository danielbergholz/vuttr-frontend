/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useUser } from '../../context/user';

const MainRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { jwt } = useUser();

  if (jwt === '') {
    return <Route {...rest} />;
  }
  return <Redirect to="/app" />;
};

export default MainRoute;
