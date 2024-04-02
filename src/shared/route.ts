import { Router } from "express";
import authRoutes from "./../routes/auth.route";
import categoryRoutes from "./../routes/category.route";
import couponRoutes from "./../routes/coupon.route";
import socialRoutes from "./../routes/social.route";
import userRoutes from "./../routes/user.route";
import blogRoutes from "./../routes/blog.route";

const router = Router();

// Root route
router.get("/", (_, res) => {
  res.send("App Working successfully");
});

// general Routes
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/coupon", couponRoutes);
router.use("/social", socialRoutes);
router.use("/blog", blogRoutes);

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
