import { Router } from "express";
import {
  createWomenChef,
  deleteWomenChefPost,
  getAllWomenChefPosts,
  getSingleWomenChefPost,
  getAllWomenChefPostSearchByArea,
  getSingleWomenChefPostSearchByArea,
  getAllWomenChefPostSearchByAmmount,
  getSingleWomenChefPostSearchByAmmount,
  updateWomenChefProfile
  
} from "../controller/womenChef.controller";

const router = Router();

// get all womenChefs post
router.get("/all", getAllWomenChefPosts);

// get single womenChef Post
router.get("/single/:id", getSingleWomenChefPost);

// get all womenChef post serach by area
router.get("/allAreaWomenChefPosts/:area", getAllWomenChefPostSearchByArea);

// get single women chef post serach by area
router.get("/sigleAreaWomenChefPosts/:area/:id", getSingleWomenChefPostSearchByArea);

// get all women chef post serach by Ammount
router.get("/allAmmountWomenChefPosts/:ammount", getAllWomenChefPostSearchByAmmount);

// get single women chef post serach by Ammount
router.get("/singleAmmountWomenChefPosts/:ammount/:id", getSingleWomenChefPostSearchByAmmount);


// create new womenChef Post
router.post("/create", createWomenChef);

// update womenChef profile
router.put("/update-post/:id", updateWomenChefProfile);

//delete user
router.delete("/delete/:id", deleteWomenChefPost);

export default router;