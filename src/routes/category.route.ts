import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getAllNonHideCategory,
  getSingleCategory,
  updateCategory,
} from "../controller/category.controlller";

const router = Router();

// get all categories
router.get("/all", getAllCategories);

// get single category
router.get("/single/:id", getSingleCategory);

// get all non hidden categories
router.get("/all/show", getAllNonHideCategory);

// add new category
router.post("/add", addCategory);

// update category
router.patch("/update/:id", updateCategory);

//delete category
router.delete("/delete/:id", deleteCategory);

export default router;
