import express from "express";

import {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
} from "../Controller/orderController.js";

const router = express.Router();


// Create
router.post("/create", createOrder);


// Get all
router.get("/allorders", getOrders);


// Get single
router.get("/:id", getSingleOrder);


// Update complete order
router.put("/update/:id", updateOrder);


// Update only status
router.patch( "/status/:id", updateOrderStatus);


// Delete
router.delete("/delete/:id",deleteOrder);

export default router;