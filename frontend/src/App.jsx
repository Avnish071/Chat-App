import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<h1>settingpage</h1>} />
        <Route path="/profile" element={<h1>profilepage</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
