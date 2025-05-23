// NavbarUser.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarUser() {
  return (
    <nav>
      {/* Logged-in user links */}
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
}
