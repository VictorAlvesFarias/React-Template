import './App.css';
import Login from './pages/shared/login/login';
import AdminRouter from './routers/admin-router';
import UserRouter from './routes/user-router';
import { AuthProvider } from './auth/auth-context';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import If from './base-components/if';
import { cookiesService } from './services/cookies-service'

function App() {
  const userType = cookiesService.get("userType")

  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={
            <>
              <If conditional={userType == "admin"}>
                <AdminRouter />
              </If>
              <If conditional={userType == "user"}>
                <UserRouter />
              </If>
            </>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
