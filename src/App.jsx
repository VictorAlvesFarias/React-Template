import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './containers/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <AuthProvider>
          <ToastContainer/>
          <Navbar/>
            <div className="w-full h-full flex justify-center items-center">
              <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
                <Route path="home" element={<Home/>} />
                <Route path="" element={<Home/>} />
                <Route path="index.html" element={<Home/>} />
              </Routes>
            </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
