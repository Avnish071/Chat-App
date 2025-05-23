import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './components/authcontext'; // ✅ Use AuthContext, not AuthProvider
import NavbarUser from './components/navbarUser';
import NavbarGuest from './components/navbarGuest';
import './App.css';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import Profile from './pages/profile';
import DashboardPage from './pages/dashboard';
import LandingPage from './pages/homepage';
import Protectedroute from './components/protectedRoutes';

const App = () => {
  const { user, loading } = useContext(AuthContext); // ✅ Correct usage
  console.log(user);

  if (loading) return <div>Loading...</div>; // ✅ Show spinner/loading indicator

  return (
    <Router>
      {user ? <NavbarUser /> : <NavbarGuest />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<h1>Setting Page</h1>} />
        {/* <Route path="/profile" element={<h1>Profile Page</h1>} /> */}
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
