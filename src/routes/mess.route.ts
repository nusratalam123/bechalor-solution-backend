import { Router } from "express";
import {
  createMessPost,
  deleteMessPost,
  getAllMessPosts,
  getSinglePost,
  getAllPostSearchByArea,
  getAllPostSearchByAmmount,
  updateMessPost
} from "../controller/mess.controller";

const router = Router();

// get all mess post
router.get("/allPost", getAllMessPosts);

// get single mess post 
router.get("/singlePost/:id", getSinglePost);

// get all mess post serach by area
router.get("/allAreaPosts/:area", getAllPostSearchByArea);

// get all mess post serach by Ammount
router.get("/allAmmountPosts/:ammount", getAllPostSearchByAmmount);

// get all mess post serach by date
//router.get("/single/:date",  getAllPostSearchByDate);

// create new mess post
router.post("/create", createMessPost);

 // update mess post
 router.put("/update-MessPost/:id", updateMessPost);

//delete mess post
 router.delete("/delete/:id", deleteMessPost);

export default router;
