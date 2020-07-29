import React, { createContext, useState, useCallback, useContext } from 'react';
import Banner from '../components/Banner';

interface ToastContextData {
  toast(message: string, type?: 'success' | 'warning' | 'info' | 'error'): void;
  closeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [display, setDisplay] = useState(0);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'warning' | 'info' | 'error'>(
    'info',
  );

  const toast = useCallback(
    (
      messageArgument: string,
      typeArgument: 'success' | 'warning' | 'info' | 'error' = 'info',
    ) => {
      setDisplay(1);
      setType(typeArgument);
      setMessage(messageArgument);

      setTimeout(() => {
        setDisplay(0);
      }, 3000);
    },
    [],
  );

  const closeToast = useCallback(() => setDisplay(0), []);

  return (
    <ToastContext.Provider value={{ toast, closeToast }}>
      <Banner display={display} message={message} type={type} />
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}
