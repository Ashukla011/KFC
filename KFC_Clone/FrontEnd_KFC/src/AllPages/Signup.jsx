import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../config/api";
import { loginSuccess } from "../Redux/authSlice";

export const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", mobileNumber: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.mobileNumber && form.mobileNumber.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/userApi/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        mobileNumber: form.mobileNumber,
      });

      localStorage.setItem("token", res.data.token);
      dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight" style={{ color: "#D10024" }}>
            KFC<span className="text-black"> Delivery</span>
          </h1>
          <p className="text-gray-400 font-medium mt-2 text-sm">Create your account</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-2 w-full flex">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-red-600"></div>
          </div>

          <div className="p-8">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">Join KFC</h2>
                <p className="text-sm text-gray-400 font-medium">Get exclusive deals & faster ordering</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-bold px-4 py-3 rounded-2xl">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3.5 outline-none font-bold text-gray-900 text-sm focus:border-red-600 focus:shadow-lg focus:shadow-red-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3.5 outline-none font-bold text-gray-900 text-sm focus:border-red-600 focus:shadow-lg focus:shadow-red-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3.5 outline-none font-bold text-gray-900 text-sm focus:border-red-600 focus:shadow-lg focus:shadow-red-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3.5 outline-none font-bold text-gray-900 text-sm focus:border-red-600 focus:shadow-lg focus:shadow-red-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Mobile Number (Optional)</label>
                <div className="flex items-center border-2 border-gray-100 rounded-2xl overflow-hidden focus-within:border-red-600 focus-within:shadow-lg focus-within:shadow-red-50 transition-all">
                  <span className="px-4 py-3.5 bg-gray-50 font-black text-gray-600 text-sm border-r-2 border-gray-100">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    name="mobileNumber"
                    value={form.mobileNumber}
                    onChange={(e) => setForm({ ...form, mobileNumber: e.target.value.replace(/\D/g, "") })}
                    placeholder="98765 43210"
                    className="flex-1 px-4 py-3.5 outline-none font-bold text-gray-900 text-sm bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-black transition-all text-white py-4 rounded-2xl font-black uppercase tracking-wider text-sm shadow-xl shadow-red-200 disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <p className="text-center text-xs text-gray-400 font-bold">
                Already have an account?{" "}
                <Link to="/login" className="text-red-600 font-black hover:underline">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
