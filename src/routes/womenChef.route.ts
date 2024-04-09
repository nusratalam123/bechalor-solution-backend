import { Router } from "express";
import {
  createWomenChef,
  deleteUser,
  getAllWomenChefs,
  getSingleWomenChef,
  getSingleUserStatus,
  updateUserProfile,
  updateUserStatus,
} from "../controller/womenChef.controller";

const router = Router();

// get all womenChefs post
router.get("/all", getAllWomenChefs);

// get single womenChef Post
router.get("/single/:id", getSingleWomenChef);

// create new womenChef Post
router.post("/create", createWomenChef);

// update womenChef profile
router.put("/update-profile/:id", updateUserProfile);

// update user status
router.patch("/change-status/:id", updateUserStatus);

//delete user
router.delete("/delete/:id", deleteUser);

export default router;