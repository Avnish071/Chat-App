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
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-[#D4AF37] border-white rounded-full animate-spin" />
        <p className="text-[#D4AF37] font-medium text-lg animate-pulse">Checking authentication...</p>
      </div>
    </div>
  );
}


  return auth ? children : <Navigate to="/login" replace />;
};

export default Protectedroute;
