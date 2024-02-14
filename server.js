const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const userRoutes = require("./routes/userRouter");

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser());

// CSRF Protection
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

// Routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
