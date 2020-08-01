import React from 'react';

import Routes from './routes';
import { ToastProvider } from './context/toast';
import { UserProvider } from './context/user';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ToastProvider>
  );
};

export default App;
