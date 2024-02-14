function generateAccessToken(userId) {
  const payload = { userId };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: "15m" };

  return jwt.sign(payload, secret, options);
}

export default generateAccessToken