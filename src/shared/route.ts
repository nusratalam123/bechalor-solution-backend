import { Router } from "express";
import authRoutes from "./../routes/auth.route";
import flatRoutes from "./../routes/flat.route";
import flatBookedRoutes from "./../routes/flatBooking.route";
import messRoutes from "./../routes/mess.route";
import messBookedRoutes from "./../routes/messOrder.route";
import tutionRoutes from "./../routes/tution.route";
import userRoutes from "./../routes/user.route";
import womenChefRoutes from "./../routes/womenChef.route";
import womenBookedRoutes from "./../routes/womenChefBooking.route";
import vehicleBookedRoutes from "./../routes/vehicleBooked.route";
import tutionBookedRoutes from "./../routes/tutionBooked.route";
import reviewRoutes from "./../routes/review.route";



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
router.use("/womenChef", womenChefRoutes);
router.use("/tution", tutionRoutes);
router.use("/mess-book", messBookedRoutes);
router.use("/flat-book", flatBookedRoutes);
router.use("/womenChef-book", womenBookedRoutes);
router.use("/vehicle-book", vehicleBookedRoutes);
router.use("/tution-book", tutionBookedRoutes);
router.use("/review", reviewRoutes);


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
