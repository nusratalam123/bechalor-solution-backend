import { Router } from "express";
import authRoutes from "./../routes/auth.route";

import userRoutes from "./../routes/user.route";
import messRoutes from "./../routes/mess.route";
import flatRoutes from "./../routes/flat.route";
import womenChefRoutes from "./../routes/womenChef.route";

const router = Router();

// Root route
router.get("/", (_, res) => {
  res.send("App Working successfully");
});

// general Routes
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/mess", messRoutes);
router.use("/flat", flatRoutes);
router.use("/womenChef",womenChefRoutes);

// Handle not found
router.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default router;
