const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../models/user");
const { default: generateAccessToken } = require("../utils/jwt/accessToken");

// routes/userRoutes.js
router.post("/refresh-token", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token required" });
  }

  try {
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Check if token exists and isn't revoked
    const existingToken = await RefreshToken.findOne({
      token: refreshToken,
      revoked: false,
    });

    if (!existingToken) {
      return res
        .status(403)
        .json({ error: "Invalid or revoked refresh token" });
    }

    // Generate new access token
    const newAccessToken = jwt.sign(
      { _id: decoded.userId },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ error: "Invalid refresh token" });
  }
});

// Registration
router.post(
  "/register",
  [
    check("username").isEmail().normalizeEmail(),
    check("password").isStrongPassword(), // Assume this checks complexity
    // Add more validation rules
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, password } = req.body;

  

      const newUser = new User({
        username: username,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
    } catch (err) {
      console.error("Registration Error:", err); // Detailed logging
      res.status(500).json({ error: "Registration failed" });
    }
  }
);

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate tokens
    const accessToken = user.generateAuthToken();
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "30d" }
    );

    // Store refresh token
    await RefreshToken.create({
      token: refreshToken,
      userId: user._id,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    // Send tokens in response
    res.cookie("accessToken", accessToken, { httpOnly: true, secure: true }); // Secure cookie options
    res.json({ refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/logout", async (req, res) => {
  const { refreshToken } = req.body;

  try {
    await RefreshToken.findOneAndUpdate(
      { token: refreshToken },
      { revoked: true }
    );
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error revoking token" });
  }
});

module.exports = router;
