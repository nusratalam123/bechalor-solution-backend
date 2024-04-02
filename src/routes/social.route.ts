import { Router } from "express";
import {
  createSocial,
  deleteSocials,
  getAllSocials,
  getSingleSocial,
  updateSocials,
} from "./../controller/social.controller";
const router = Router();

//get all social media infos
router.get("/all", getAllSocials);

// get single social media info
router.get("/single/:name", getSingleSocial);

// create new social information.
router.post("/create", createSocial);

// update all informations
router.put("/update", updateSocials);

//delete all social media informations
router.delete("/delete/all", deleteSocials);

export default router;
