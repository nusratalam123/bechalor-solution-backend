import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import connectDB from "./config/db";
import secrets from "./config/secret";
import middleware from "./shared/middleware";
import routes from "./shared/route";

const app = express();
const PORT = secrets.PORT;

// app middleware
app.use(middleware);

// jwt authorization
app.use((req, res, next) => {
  try {
    if (req.path === "/api/v1/auth/signup" || req.path === "/api/v1/auth/login") {
      return next()
    }

    let cookie = req.cookies
    const isAuthorized = jwt.verify(cookie.auth_token, secrets.jwt_secret);

    if (!isAuthorized) {
      throw new Error()
    }

    next()
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});


// connect to database
connectDB();

// define routes
app.use("/api/v1", routes);

// listen to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
