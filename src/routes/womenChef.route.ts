import { Router } from "express";
import {
  createWomenChef,
  deleteWomenChefPost,
  getAllWomenChefPosts,
  getSingleWomenChefPost,
  getSingleUserStatus,
  updateWomenChefProfile,
  updateUserStatus,
} from "../controller/womenChef.controller";

const router = Router();

// get all womenChefs post
router.get("/all", getAllWomenChefPosts);

// get single womenChef Post
router.get("/single/:id", getSingleWomenChefPost);

// create new womenChef Post
router.post("/create", createWomenChef);

// update womenChef profile
router.put("/update-profile/:id", updateWomenChefProfile);

// update user status
router.patch("/change-status/:id", updateUserStatus);

//delete user
router.delete("/delete/:id", deleteWomenChefPost);

export default router;