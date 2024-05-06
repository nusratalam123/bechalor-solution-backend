import { Router } from "express";
import {
  getAllWomenChefBookingPosts,
  getSingleWomenChefBookingPost,
  createWomenChefBookingPost,
  updateWomenChefBookingPost,
  deleteWomenChefBookingPost,
} from "../controller/womenChefBooking.controller";

const router = Router();

// get all women chef booking  posts
router.get("/all", getAllWomenChefBookingPosts);

// get single women chef booking post
router.get("/single-booking-post/:id", getSingleWomenChefBookingPost);

// create new women chef booking post
router.post("/create", createWomenChefBookingPost);

// update women chef booking post
router.put("/update-booking-post/:id", updateWomenChefBookingPost);

//delete women chef booking post
router.delete("/delete/:id", deleteWomenChefBookingPost);

export default router;
