import { Router } from "express";
import {
  getAllTutionBookedPosts,
  getSingleTutionBookedPost,
  getAllTutionBookedPostSearchBytutionId,
  createTutionBookedPost,
  updateTutionBookedPost,
  deleteTutionBookedPost
} from "../controller/tutionBooked.controller";

const router = Router();

// get all tution booked post
router.get("/all", getAllTutionBookedPosts);

// get single tution booked Post
router.get("/single/:id", getSingleTutionBookedPost);

// get all tution booked post serach by tution id
router.get("/all-booked-post/:tutionId", getAllTutionBookedPostSearchBytutionId);

// create new tution booked Post
router.post("/create", createTutionBookedPost);

// update tution booked post
router.put("/update-booked-post/:id", updateTutionBookedPost);

//delete tution booked post
router.delete("/delete/:id", deleteTutionBookedPost);

export default router;
