import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Application from './routers/Application';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/*" element={<Application />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
