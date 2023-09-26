import React, { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  email: string;

}

interface AuthContextProps {
  user: User | null | undefined;
  refetch: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContextProvider = ({ children }:AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null | undefined>();

  const getMyProfile = useCallback(async () => {
    try {
      const { data } = await axios.get('http://3.38.116.35:8000/users', {
        withCredentials: true,
      });

      if (data?.data) {
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);

  const refetch = useCallback(() => {
    getMyProfile();
  }, [getMyProfile]);

  return (
    <AuthContext.Provider
      value={{
        user,
        refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
