import { Router } from "express";
import { login, signup } from "../controller/auth.controller";

const router = Router();

// register new user
router.post("/signup", signup);

// user login
router.post("/login", login);

// // forget password
// router.patch("/forget-password", forgetPassword);

// // confirm forget password
// router.patch("/confirm-forget-password", confirmForgetPassword);

// // change password
// router.patch("/change-password", changePassword);

export default router;
