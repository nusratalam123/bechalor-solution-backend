import { Router } from "express";

import {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} from "../controller/review.controller";

const router = Router();

// get all reviews
router.get("/all", getAllReviews);

// get single review
router.get("/single/:id", getSingleReview);

// create new review
router.post("/create", createReview);

// update review profile
router.put("/update/:id", updateReview);

//delete review
router.delete("/delete/:id", deleteReview);

export default router;
