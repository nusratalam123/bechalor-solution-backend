import "dotenv/config";
import express from "express";
import connectDB from "./config/db";
import secrets from "./config/secret";
import middleware from "./shared/middleware";
import routes from "./shared/route";

const app = express();
const PORT = secrets.PORT;

// app authorization
app.use((req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token !== secrets.authorization_secret) {
      throw new Error();
    }

    next();
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized access",
    });
  }
});
// app middleware
app.use(middleware);

// connect to database
connectDB();

// define routes
app.use("/api/v1", routes);

// listen to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
