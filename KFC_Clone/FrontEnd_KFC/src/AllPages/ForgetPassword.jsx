import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";
import { toast } from "react-toastify";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [resetToken, setResetToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setResetToken("");

    if (!email) {
      setMessage("Email is required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/userApi/forget-password", { email });

      setMessage(res.data.message);
      if (res.data.resetToken) {
        setResetToken(res.data.resetToken);
        toast.info("Reset token generated. Use it to reset your password.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send reset email");
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
            KFC
          </h1>
          <p className="text-gray-600 mt-2">Reset Your Password</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {message && (
              <div className="text-sm text-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                {message}
              </div>
            )}

            {resetToken && (
              <div className="text-sm text-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                <strong>Reset Token:</strong> {resetToken}
                <br />
                <small>Use this token on the reset password page</small>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};