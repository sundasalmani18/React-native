import express from "express";
import {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} from "../Controller/categoryController.js"

const router = express.Router();

router.post("/addcategory", addCategory);

router.get("/allcategories", getCategories);

router.put("/update/:id", updateCategory);

router.delete("/delete/:id", deleteCategory);

export default router;