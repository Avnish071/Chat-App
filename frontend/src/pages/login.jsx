import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatusMessage(data.message || "Login failed");
      } else {
        setStatusMessage("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000);
      }
    } catch (err) {
      setStatusMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full"
      >
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <LogIn className="h-7 w-7 text-primary" />
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              </div>
              <p className="text-sm text-gray-500">Log in to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label-text block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label-text block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="input input-bordered w-full pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p
                className={`text-center text-sm font-medium ${
                  statusMessage === "Login successful!" ? "text-green-600" : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}

            {/* Footer */}
            <div className="text-sm text-gray-500 text-center">
              Don’t have an account?{" "}
              <a href="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-100">
            <img
            src="/photos/landingimage.jpeg"
            alt="Chat App Visual"
          className="w-[32rem]  object-cover rounded-xl shadow-lg"


          />

        </div>
      </motion.div>
    </div>
  );
}
