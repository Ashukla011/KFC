const express = require("express");
const authRoute = express.Router();

authRoute.use(express.json());


const {admin} = require("../firebase");
const jwt = require("jsonwebtoken");
const {User} = require("../modules/UserAuthModule");

authRoute.post("/login", async (req, res) => {
  try {
    const { token } = req.body;

    // Verify Firebase token
    const decoded = await admin.auth().verifyIdToken(token);
    const mobile = decoded.phone_number;

    // Find or create user
    let user = await User.findOne({ MobileNumber: mobile });
    if (!user) {
      user = await User.create({ MobileNumber: mobile });
    }

    // Create JWT
    const jwtToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token: jwtToken });

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = {authRoute}







