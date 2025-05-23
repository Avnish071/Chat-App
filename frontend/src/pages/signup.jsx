import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Controller function (normally you'd move this to a separate file)
async function registerUser({ fullName, email, password }) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ fullName, email, password }),
  });


    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Signup failed");
    return data;
  } catch (error) {
    throw error;
  }
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
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
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <UserPlus className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
              </div>
              <p className="text-sm text-gray-500">Join us and start your journey today.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label"><span className="label-text">Full Name</span></label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="e.g., John Doe"
                  className="input input-bordered w-full focus:input-primary"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:input-primary"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Password</span></label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-12 focus:input-primary"
                    value={form.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <label className="label">
                  <span className="label-text-alt text-xs text-gray-400">Must be at least 6 characters</span>
                </label>
              </div>

              {error && (
                <div className="text-sm text-red-500 font-medium text-center">{error}</div>
              )}

              <button className="btn btn-primary w-full mt-2" type="submit">Create Account</button>
            </form>

            <div className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-medium hover:underline">Log in</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
