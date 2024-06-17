import './App.css';
import Login from './pages/public/login';
import AdminRouters from './routers/admin-routers';
import { AuthProvider } from './context/auth-context';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import If from './components/if';

function App() {
  const userType = Cookies.get('userType')

  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={
            <>
              <If conditional={userType == "admin"}>
                <AdminRouters />
              </If>
              <If conditional={userType == "broker"}>
                <AdminRouters />
              </If>
            </>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
