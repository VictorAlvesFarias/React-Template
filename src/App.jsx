import './App.css';
import Login from './pages/shared/login/login';
import Signup from './pages/shared/signup/signup';
import UserRouter from './routes/user-router';
import { AuthProvider } from './auth/auth-context';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { cookiesService } from './services/cookies-service'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

function App() {
  const userType = cookiesService.get("userType")

  return (
    <ReduxProvider store={store}>
      <Router>
        <AuthProvider>
          <ToastContainer />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/*" element={<UserRouter />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  );
}

export default App;
