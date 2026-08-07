import express from "express";
import upload from "../middleware/upload.js";
import {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} from "../Controller/categoryController.js"

const router = express.Router();

router.post("/addcategory", upload.single("image"),addCategory);

router.get("/allcategories", getCategories);

router.put("/update/:id", upload.single("image"), updateCategory);

router.delete("/delete/:id", deleteCategory);

export default router;