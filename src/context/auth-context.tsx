import Cookies from 'js-cookie';
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { useErrors } from '../utils/hooks/use-errors';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../services/login-service';
import { authConfig } from '../config/auth-config';
import { Axios } from '../interfaces/shared/axios';
import { AuthContextType } from '../interfaces/shared/auth-context';
import { BaseResponseApi } from '../interfaces/shared/base-response-api'
import { LoginSchema } from '../interfaces/schemas/login-schema';
import { LoginEntity } from '../interfaces/entities/login-entity';

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => Promise.resolve(),
  logout: () => { }
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get('jwtApplicationToken');
  const loginService = new LoginService()
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const navigate = useNavigate()

  async function signIn(props: LoginSchema) {
    const result = loginService.loginPost(props)
      .then(({ data }: Axios<BaseResponseApi<LoginEntity>
      >
      ) => {
        setIsAuthenticated(true)
        Cookies.set('userType', data.res.userType, { expires: 0.1 })
        Cookies.set('jwtApplicationToken', data.res.accessToken, { expires: 0.1 })
        Cookies.set('expirationJwtApplicationToken', data.res.expirationTimeAccessToken, { expires: 0.1 })
        Cookies.set('expirationDateTimeJwtApplicationToken', data.res.expirationDateTimeAccessToken, { expires: 0.1 })
        window.location.href = "/"
      })
      .catch((error) => {
        useErrors(error);
      })

    return result
  }

  function logout() {
    Cookies.remove('jwtApplicationToken');
    Cookies.remove('expirationJwtApplicationToken');
    Cookies.remove('expirationDateTimeJwtApplicationToken');
    window.location.href = "/login"
  }

  const authContext: AuthContextType = {
    signIn: signIn,
    logout: logout,
    isAuthenticated: isAuthenticated
  }

  useEffect(() => {
    const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")
    const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

    setTimeout(() => {
      if (token && authConfig.authorizeNotRequired.includes(window.location.pathname)) {
        navigate("/")
      }
      if (token) {

      }
      else if (!authConfig.authorizeNotRequired.includes(window.location.pathname) && !authConfig.desactivateAuth) {
        authContext.logout()
      }
    }, timeDiference);
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
}