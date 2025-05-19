import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
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
      const response = await fetch("/api/login", {  // adjust URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // if your backend sets HTTP-only cookies for JWT token
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Backend returns JSON with message property on error
        setStatusMessage(data.message || "Login failed");
      } else {
        setStatusMessage("Login successful!");
        // Optionally, save user data or redirect
        // e.g. localStorage.setItem('user', JSON.stringify(data));
        // Or redirect with useNavigate from react-router-dom
      }
    } catch (err) {
      setStatusMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-white flex items-start justify-start px-8 py-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 border border-gray-200 shadow-xl rounded-2xl">
          <div className="card-body space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <LogIn className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              </div>
              <p className="text-sm text-gray-500">Log in to your account</p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:input-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-12 focus:input-primary"
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

              <button className="btn btn-primary w-full mt-2" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p
                className={`text-center mt-4 ${
                  statusMessage === "Login successful!"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}

            {/* Footer */}
            <div className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
