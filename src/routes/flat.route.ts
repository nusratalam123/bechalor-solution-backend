import { Router } from "express";
import {
  createFlatPost,
  deleteFlatPost,
  getAllFlatPosts,
  getSingleFlatPost,
  getAllFlatPostSearchByArea,
  getSingleFlatPostSearchByArea,
  getAllFlatPostSearchByAmmount,
  getSingleFlatPostSearchByAmmount,
  updateFlatPost
} from "../controller/flat.controller";

const router = Router();

// get all flat post
router.get("/allFlatPost", getAllFlatPosts);

// get single flat post 
router.get("/singleFlatPost/:id", getSingleFlatPost);

// get all flat post serach by area
router.get("/allAreaFlatPosts/:area", getAllFlatPostSearchByArea);

// get single flat post serach by area
router.get("/sigleAreaFlatPosts/:area/:id", getSingleFlatPostSearchByArea);

// get all flat post serach by Ammount
router.get("/allAmmountFlatPosts/:ammount", getAllFlatPostSearchByAmmount);

// get single flat post serach by Ammount
router.get("/allAmmountFlatPosts/:ammount/:id", getSingleFlatPostSearchByAmmount);

// get all mess post serach by date
//router.get("/single/:date",  getAllPostSearchByDate);

// create new flat post
router.post("/create", createFlatPost);

 // update flat post
 router.put("/update-FlatPost/:id", updateFlatPost);

//delete flat post
 router.delete("/delete/:id", deleteFlatPost);

export default router;
