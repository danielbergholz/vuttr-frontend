import React from 'react';

import Routes from './routes';
import { ToastProvider } from './context/toast';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
};

export default App;
