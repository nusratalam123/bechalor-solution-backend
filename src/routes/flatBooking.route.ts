import { Router } from "express";

import {
  getAllFlatBookingPosts,
  getSingleFlatBookingPost,
  getAllFlatBookingPostSearchByArea,
  getSingleFlatBookingPostSearchByArea,
  createFlatBookingPost,
  updateFlatBookingPost,
  deleteFlatBokingPost
} from "../controller/flatBooking.controller";

const router = Router();

// get all flat booking post
router.get("/all-flat-booking-post", getAllFlatBookingPosts);

// get single flat booking post
router.get("/single-flat-booking-post/:id", getSingleFlatBookingPost);

// get all flat booking post serach by area
router.get("/all-area-flaf-booking-posts/:area", getAllFlatBookingPostSearchByArea);

// get single flat booking post serach by area
router.get("/sigle-area-flat-booking-posts/:area/:id", getSingleFlatBookingPostSearchByArea);

// create new flat booking post
router.post("/create", createFlatBookingPost);

// update flat booking post
router.put("/update-flat-booking-post/:id", updateFlatBookingPost);

//delete flat booking post
router.delete("/delete/:id", deleteFlatBokingPost);

export default router;
