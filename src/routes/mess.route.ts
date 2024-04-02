import { Router } from "express";
import {
//   createUser,
//   deleteUser,
  getAllMessPosts,
//   getSingleUser,
//   getSingleUserStatus,
//   updateUserProfile,
//   updateUserStatus,
} from "../controller/mess.controller";

const router = Router();

// get all mess post
router.get("/all", getAllMessPosts);

// // get single user
// router.get("/single/:id", getSingleUser);

// //get single user status
// router.get("/single/status/:id", getSingleUserStatus);

// // create new user
// router.post("/create", createUser);

// // update user profile
// router.put("/update-profile/:id", updateUserProfile);

// // update user status
// router.patch("/change-status/:id", updateUserStatus);

// //delete user
// router.delete("/delete/:id", deleteUser);

export default router;
