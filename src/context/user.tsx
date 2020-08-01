import React, { createContext, useState, useContext, useCallback } from 'react';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserContextData {
  jwt: string;
  setJwt(jwt: string): void;
  clearLocalStorage(): void;
  user: UserData;
  setUser(userObj: UserData): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [jwt, setJwtToken] = useState<string>(() => {
    const savedJwt = localStorage.getItem('@vuttr:jwt');

    if (!savedJwt) {
      return '';
    }

    return savedJwt;
  });

  const [user, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('@vuttr:user');

    if (!savedUser) {
      return {};
    }

    return JSON.parse(savedUser);
  });

  const clearLocalStorage = useCallback(() => {
    setJwtToken('');
    setUserData({});
    localStorage.clear();
  }, []);

  const setJwt = useCallback((jwtToken: string) => {
    setJwtToken(jwtToken);
    localStorage.setItem('@vuttr:jwt', jwtToken);
  }, []);

  const setUser = useCallback((userParam: UserData) => {
    setUserData(userParam);
    localStorage.setItem('@vuttr:user', JSON.stringify(userParam));
  }, []);

  return (
    <UserContext.Provider
      value={{ jwt, setJwt, clearLocalStorage, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}
