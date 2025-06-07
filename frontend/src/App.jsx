import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './components/authcontext';
import './App.css';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import Navbar from './components/navbarUser';
import Profile from './pages/upcomingevents';
import ModelAgencyHome from './pages/dashboard';
import LandingPage from './pages/homepage';
import Protectedroute from './components/protectedRoutes';

const App = () => {
  const { user, loading } = useContext(AuthContext);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (!user) return; // Only track scroll if logged in

    const handleScroll = () => {
      if (window.scrollY > 720) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-[#D4AF37] border-white rounded-full animate-spin" />
          <p className="text-[#D4AF37] font-medium text-lg animate-pulse">Loading, please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      {/* Show Navbar only if user is logged in AND has scrolled down */}
      {user && (
  <div
    className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-[700ms] ease-in-out ${
      showNavbar
        ? 'opacity-90 translate-y-0 pointer-events-auto'
        : '-translate-y-16 opacity-0 pointer-events-none'
    }`}
  >
    <Navbar />
  </div>
)}




      

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<h1>Setting Page</h1>} />

        <Route
          path="/dashboard"
          element={
            <Protectedroute>
              <ModelAgencyHome />
            </Protectedroute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
