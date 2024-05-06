import { Router } from "express";
import {
  createVehicleBookingPost,
  deletevehicleBookingPost,
  getAllVehicleBookingPostSearchByArea,
  getAllVehicleBookingPosts,
  getSingleVehicleBookingPost,
  updateVehicleBookingPost,
} from "../controller/vehicleBooked.controller";

const router = Router();

// get all vehicle booking  posts
router.get("/all-booking-post", getAllVehicleBookingPosts);

// get single vehicle booking post
router.get("/single-booking-post/:id", getSingleVehicleBookingPost);

// get all vehicle booking post serach by area
router.get("/all-booking-area-posts/:area", getAllVehicleBookingPostSearchByArea);

// create new vehicle booking post
router.post("/add", createVehicleBookingPost);

// update vehicle booking post
router.put("/update-booking-vehicle-post/:id", updateVehicleBookingPost);

//delete vehicle booking post
router.delete("/delete/:id", deletevehicleBookingPost);

export default router;
