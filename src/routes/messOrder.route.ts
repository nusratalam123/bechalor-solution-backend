import { Router } from "express";
import {
  getAllMessBookingPosts,
  getSingleMessBookingPost,
  getAllMessBookingPostSearchByArea,
  createMessBookingPost,
  updateMessBookingPost,
  deleteMessBookingPost,
} from "../controller/messOrder.controller";

const router = Router();

// get all mess booking  posts
router.get("/all-booking-post", getAllMessBookingPosts);

// get single mess booking post
router.get("/single-booking-post/:id", getSingleMessBookingPost);

// get all mess booking post serach by area
router.get("/all-booking-area-posts/:area", getAllMessBookingPostSearchByArea);

// create new mess booking post
router.post("/create", createMessBookingPost);

// update mess booking post
router.put("/update-booking-mess-post/:id", updateMessBookingPost);

//delete mess booking post
router.delete("/delete/:id", deleteMessBookingPost);

export default router;
