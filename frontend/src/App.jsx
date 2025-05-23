import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarUser from './components/navbarUser';
import './App.css';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import Protectedroute from './components/protectedRoutes';
import { AuthProvider } from './components/authcontext';
const {user} =AuthProvider;
console.log(user);
const App = () => {
  return (
    <Router>
      <NavbarUser />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<h1>settingpage</h1>} />
        <Route path="/profile" element={<h1>profilepage</h1>} />
        <Route
          path="/dashboard"
          element={
            <Protectedroute>
              <DashboardPage />
            </Protectedroute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
