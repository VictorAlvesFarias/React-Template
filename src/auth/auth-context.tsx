import Cookies from 'js-cookie';
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../services/login-service';
import { AUTH } from '../config/auth-config';
import { AuthContextType } from '../interfaces/shared/auth-context';

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => Promise.resolve(),
  logout: () => { },
  permissions: null
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get('accessToken');
  const permissions = Cookies.get('claims');
  const loginService = new LoginService()
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [timeoutStarted, setTimeoutStarted] = useState(false);
  const [permissionsContext, setPermissionsContext] = useState(JSON.parse(permissions ?? "{}"));
  const navigate = useNavigate()

  function signIn(data) {
    const result = loginService.loginPost(data)
      .then(({ res: data }) => {
        setIsAuthenticated(true)
        setPermissionsContext(data.claims)

        const keys = Object.keys(data)

        keys.forEach(e => {
          if (typeof data[e] == "object") {
            Cookies.set(e, JSON.stringify(data[e]), { expires: Number(data.expirationTimeAccessToken) })
          }
          else {
            Cookies.set(e, data[e], { expires: Number(data.expirationTimeAccessToken) })
          }
        })

        window.location.href = "/"
      })

    return result
  }
  function logout() {
    const keys = Object.keys(Cookies.get())
    keys.forEach(e => {
      Cookies.remove(e)
    })

    window.location.href = "/login"
  }

  const authContext: AuthContextType = {
    signIn: signIn,
    logout: logout,
    isAuthenticated: isAuthenticated || AUTH.DISABLE_AUTH,
    permissions: permissionsContext
  }

  useEffect(() => {
    const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")

    if (((expirationDate == null || expirationDate == undefined) || token == null || token == undefined) && AUTH.DISABLE_AUTH == false) {
      if (!AUTH.AUTHORIZE_NOT_REQUIRED.includes(window.location.pathname)) {
        authContext.logout()
      }
    }
    else if (token) {
      const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

      if (AUTH.AUTHORIZE_NOT_REQUIRED.includes(window.location.pathname)) {
        navigate("/")
      }

      if (!timeoutStarted) {
        setTimeoutStarted(true)
        setTimeout(() => {
          authContext.logout()
        }, timeDiference);
      }
    }
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