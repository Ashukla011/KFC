const express = require("express");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { UserAuthModule } = require("../modules/UserAuthModule");

authRoute.use(express.json());

// SIGNUP - Create new user
authRoute.post("/signup", async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if user already exists
    const existingUser = await UserAuthModule.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new user
    const user = new UserAuthModule({
      name: name.trim(),
      email: email.toLowerCase(),
      password,
      mobileNumber: mobileNumber || ""
    });

    await user.save();

    // Create JWT
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber
      }
    });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: err.message || "Signup failed" });
  }
});

// LOGIN - Authenticate user
authRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await UserAuthModule.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Verify password
    const isPasswordValid = await user.verifyPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber
      }
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Login failed" });
  }
});

// FORGET PASSWORD - Request password reset
authRoute.post("/forget-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await UserAuthModule.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    // Save reset token to user
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpiry;
    await user.save();

    // In a real app, send email with reset link
    // For now, return the token (in production, this would be emailed)
    res.json({
      message: "Password reset token generated. Check your email for reset instructions.",
      resetToken: resetToken, // Remove this in production
      resetUrl: `http://localhost:3000/reset-password?token=${resetToken}` // Frontend URL
    });

  } catch (err) {
    console.error("Forget Password Error:", err);
    res.status(500).json({ message: "Failed to process request" });
  }
});

// RESET PASSWORD - Reset password with token
authRoute.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Find user with valid reset token
    const user = await UserAuthModule.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Update password
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: "Failed to reset password" });
  }
});

module.exports = { authRoute };







