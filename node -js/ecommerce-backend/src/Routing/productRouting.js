import express from "express";
import upload from "../middleware/upload.js";

import {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../Controller/productController.js";

const router = express.Router();

router.post("/addproduct", upload.single("image"), addProduct);

router.get("/allproducts", getProducts);

router.get("/:id", getSingleProduct);

router.put("/update/:id", upload.single("image"), updateProduct);

router.delete("/delete/:id", deleteProduct);

export default router;