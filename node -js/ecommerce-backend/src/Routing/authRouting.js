import express from "express";

import {
  Signup,
  Login,
  addUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../Controller/authController.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/adduser", addUser);

router.get("/allusers", getUsers);

router.get("/user/:id", getSingleUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

export default router;