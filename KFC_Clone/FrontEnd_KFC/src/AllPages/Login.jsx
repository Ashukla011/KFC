import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../config/api";
import { loginSuccess } from "../Redux/authSlice";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/userApi/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
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
          <p className="text-gray-400 font-medium mt-2 text-sm">Sign in to continue</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Red strip */}
          <div className="h-2 w-full flex">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-red-600"></div>
          </div>

          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">Welcome Back</h2>
                <p className="text-sm text-gray-400 font-medium">Sign in with your email & password</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-bold px-4 py-3 rounded-2xl">
                  {error}
                </div>
              )}

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

              <div className="text-right">
                <Link to="/forget-password" className="text-xs text-red-600 hover:text-red-700 font-medium">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-black transition-all text-white py-4 rounded-2xl font-black uppercase tracking-wider text-sm shadow-xl shadow-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-center text-xs text-gray-400 font-bold">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red-600 font-black hover:underline">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-gray-300 font-bold uppercase tracking-widest mt-8">
          Finger Lickin' Good Since 1952
        </p>
      </div>
    </div>
  );
};
