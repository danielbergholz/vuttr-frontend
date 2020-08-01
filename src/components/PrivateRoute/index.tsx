/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useUser } from '../../context/user';
import { useToast } from '../../context/toast';

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { jwt } = useUser();
  const { toast } = useToast();

  if (jwt === '') {
    toast('Please login first', 'warning');
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
};

export default PrivateRoute;
