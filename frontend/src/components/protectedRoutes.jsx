import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/check", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setAuth(false);
      }
    };

    verify();
  }, []);

  if (auth === null) {
    return <div className="p-10 text-center">Checking authentication...</div>;
  }

  return auth ? children : <Navigate to="/login" replace />;
};

export default Protectedroute;
