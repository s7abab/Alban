const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // ... verify access token
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid access token" });
  }
};

module.exports = authMiddleware;
