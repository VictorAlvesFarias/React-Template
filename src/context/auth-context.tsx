import Cookies from 'js-cookie';
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { useErrors } from '../utils/hooks/errors';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../services/login-service';
import { config } from './auth-config';
import { LoginData } from '../interfaces/data/login-data';
import { Axios } from '../interfaces/shared/axios';
import { BaseResponseApi } from '../interfaces/shared/base-response-api';
import { AuthContextType } from '../interfaces/shared/auth-context';
import { LoginForm } from '../interfaces/data/login-form';

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => Promise.resolve(),
  logout: () => { }
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const token = Cookies.get('jwtApplicationToken');
  const loginService = new LoginService()
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const authContext: AuthContextType = {
    signIn: async (data: LoginForm) => {
      const result = loginService.loginPost(data)
        .then(({ data: { res } }: Axios<BaseResponseApi<LoginData>>) => {
          setIsAuthenticated(true)
          Cookies.set('jwtApplicationToken', res.accessToken, { expires: 0.1 })
          Cookies.set('expirationJwtApplicationToken', res.expirationTimeAccessToken, { expires: 0.1 })
          Cookies.set('expirationDateTimeJwtApplicationToken', res.expirationDateTimeAccessToken, { expires: 0.1 })
          window.location.href = "./"
        })
        .catch((error) => {
          useErrors(error);
        })

      return await result
    },
    logout: () => {
      Cookies.remove('jwtApplicationToken');
      Cookies.remove('expirationJwtApplicationToken');
      Cookies.remove('expirationDateTimeJwtApplicationToken');
      window.location.href = "./login"
    },
    isAuthenticated: isAuthenticated
  }

  useEffect(() => {
    const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")
    const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

    setTimeout(() => {
      if (token) {
        authContext.logout()
      }
      else if (!config.authorizeNotRequired.includes(window.location.pathname)&&!config.desactivateAuth ) {
        navigate("/login")
      }
    }, timeDiference);
  }, [])

  return (
    <AuthContext.Provider value={authContext} children={children} />
  );
};

export {
  AuthContext,
  AuthProvider
}