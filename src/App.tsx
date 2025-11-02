import './App.css';
import "react-base-components/styles.css";
import Login from './pages/shared/login/login';
import Signup from './pages/shared/signup/signup';
import UserRouter from './routes/user-router';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthProvider, IAuthContextType, BaseContext, BaseProvider } from 'react-toolkit';
import { loginService } from './services/login-service';
import { AUTH } from './config/auth-config';
import { AuthenticationService } from 'typescript-toolkit'

function App() {
  const token = Cookies.get('accessToken');
  const permissions = Cookies.get('claims');
  const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")

  function onInit(props: IAuthContextType) {
    AuthenticationService.validateSession(
      token,
      window.location.pathname,
      expirationDate,
      AUTH.DISABLE_AUTH,
      AUTH.AUTHORIZE_NOT_REQUIRED,
      (event: string) => {
        if (AUTH.DISABLE_AUTH) {
          props.setIsAuthenticated?.(true)
        }

        if (event == "logout") {
          window.location.pathname = '/login'
          loginService.logout()

          props.setIsAuthenticated?.(false)
          props.setPermissions?.(null)

          return false
        }

        if (event == "not-required") {
          return true
        }
        
        if (event == "authenticate") {
          return true
        }
      })
  }

  return (
    <Router>
      <BaseProvider>
        <AuthProvider
          claims={JSON.parse(permissions ?? '[]')}
          token={token ?? null}
          onInit={onInit}
        >
          <>
            <ToastContainer />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/*" element={<UserRouter />} />
            </Routes>
          </>
        </AuthProvider>
      </BaseProvider>
    </Router>
  );
}

export default App;
