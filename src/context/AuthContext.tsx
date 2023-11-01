import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useErrors } from '../utils/hooks/Errors';
import { toast } from 'react-toastify';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginService } from './../services/LoginService';
import { config } from './AuthConfig';

export interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (credentials: { data }) => Promise<any>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => Promise.resolve(),
  logout: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate();

  const token = Cookies.get('jwtApplicationToken');

  const loginService = new LoginService()

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  async function signIn(data) {
    const result = loginService.loginPost(data)
      .then(response => {

        setIsAuthenticated(true)

        Cookies.set('jwtApplicationToken', response.data.accessToken, { expires: 0.1 })

        Cookies.set('expirationJwtApplicationToken', response.data.expirationTimeAccessToken, { expires: 0.1 })

        Cookies.set('expirationDateTimeJwtApplicationToken', response.data.expirationDateTimeAccessToken, { expires: 0.1 })

        window.location.href = "./"

      })
      .catch((error) => {
        useErrors(error);
      })

    return await result
  }

  function logout() {
    Cookies.remove('jwtApplicationToken');
    Cookies.remove('expirationJwtApplicationToken');
    Cookies.remove('expirationDateTimeJwtApplicationToken');
    window.location.href = "./"
  }

  useEffect(() => {
    const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")

    const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

    setTimeout(() => {
      if (token) {
        logout()
      }
      else if (
        !config.authorizeNotRequired.includes(window.location.pathname)
      ) {
        navigate("/login")
      }
    }, timeDiference);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


