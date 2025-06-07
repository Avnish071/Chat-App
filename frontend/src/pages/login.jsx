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
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      <div className="absolute top-4 left-6 z-50">
        <img
          src="/photos/logo.jpg"  // Replace with your actual logo path
          alt="Logo"
          className="h-32 w-auto object-contain"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-[#111] shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl"
      >
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#111] text-white">
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <LogIn className="h-7 w-7 text-[#D4AF37]" />
                <h1 className="text-2xl font-bold text-[#D4AF37]">Welcome Back</h1>
              </div>
              <p className="text-sm text-gray-300">Log in to your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full bg-transparent border border-[#D4AF37] text-white p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full bg-transparent border border-[#D4AF37] text-white p-2 pr-10 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#D4AF37]"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black py-2 rounded hover:bg-white transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {statusMessage && (
              <p
                className={`text-center text-sm font-medium ${
                  statusMessage === "Login successful!" ? "text-green-500" : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            )}

            <div className="text-sm text-gray-300 text-center">
              Don’t have an account?{" "}
              <a href="/signup" className="text-[#D4AF37] hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Right: Video Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/photos/video/starmodel.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
