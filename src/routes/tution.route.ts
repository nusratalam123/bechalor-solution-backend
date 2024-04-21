import { Router } from "express";
import {
  createTutionPost,
  deleteTutionPost,
  getAllTutionPostSearchByAmmount,
  getAllTutionPostSearchByArea,
  getAllTutionPostSearchByClass,
  getAllTutionPostSearchByGroup,
  getAllTutionPostSearchByMonth,
  getAllTutionPosts,
  getSingleTutionPost,
  getSingleTutionPostSearchByAmmount,
  getSingleTutionPostSearchByArea,
  getSingleTutionPostSearchByClass,
  getSingleTutionPostSearchByGroup,
  getSingleTutionPostSearchByMonth,
  updateTutionPost,
} from "../controller/tution.controller";

const router = Router();

// get all tution post
router.get("/all", getAllTutionPosts);

// get single tution Post
router.get("/single/:id", getSingleTutionPost);

// get all tution post serach by area
router.get("/allAreaTutionPosts/:area", getAllTutionPostSearchByArea);

// get single tution post serach by area
router.get("/sigleAreaTutionPost/:area/:id", getSingleTutionPostSearchByArea);

// get all tution post serach by Ammount
router.get("/allAmmountTutionPosts/:ammount", getAllTutionPostSearchByAmmount);

// get single tution post serach by Ammount
router.get("/singleAmmountTutionPosts/:ammount/:id",getSingleTutionPostSearchByAmmount,);

// get all tution post serach by Group
router.get("/allGroupTutionPosts/:group", getAllTutionPostSearchByGroup);

// get single tution post serach by Group
router.get("/singleGroupTutionPosts/:group/:id",getSingleTutionPostSearchByGroup,);

// get all tution post serach by class
router.get("/allClassTutionPosts/:class", getAllTutionPostSearchByClass);

// get single tution post serach by class
router.get("/singleClassTutionPosts/:class/:id",getSingleTutionPostSearchByClass,);

// get all tution post serach by Month
router.get("/allMonthTutionPosts/:month", getAllTutionPostSearchByMonth);

// get single tution post serach by Month
router.get("/singleMonthTutionPosts/:month/:id",getSingleTutionPostSearchByMonth,);

// create new tution Post
router.post("/create", createTutionPost);

// update tution post
router.put("/update-post/:id", updateTutionPost);

//delete tution post
router.delete("/delete/:id", deleteTutionPost);

export default router;
