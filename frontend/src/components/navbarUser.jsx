import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./authcontext";


export default function NavbarUser() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setUser(null);
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
    setShowConfirm(false);
  };

  return (
    <>
      <nav className="navbar flex items-center justify-between px-4 py-3 bg-white shadow-md relative">
        {/* Left side (optional nav links, you can add if needed) */}
        <div className="flex space-x-4">
          {/* Example link - replace or remove */}
          {/* <NavLink
            to="/somepage"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Some Page
          </NavLink> */}
        </div>

        {/* Profile Icon on right */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setProfileMenuOpen((prev) => !prev)}
            className="rounded-full overflow-hidden w-10 h-10 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Profile menu"
            type="button"
          >
            <img
              src="/photos/chit-chat.jpeg" // Replace with actual user profile image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Dropdown menu */}
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 ring-1 ring-black ring-opacity-5">
               <NavLink
                to="/Dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileMenuOpen(false)}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileMenuOpen(false)}
              >
                Profile
              </NavLink>
              <NavLink
                to="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileMenuOpen(false)}
              >
                Settings
              </NavLink>
              <button
                onClick={() => {
                  setProfileMenuOpen(false);
                  setShowConfirm(true);
                }}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                type="button"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="btn btn-outline"
                type="button"
              >
                Cancel
              </button>
              <button onClick={handleLogout} className="btn btn-primary" type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
