import React from "react";
import { Link } from "react-router-dom";

const NavbarGuest = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="hover:bg-gray-700 px-3 py-2 rounded-md transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavbarGuest;
