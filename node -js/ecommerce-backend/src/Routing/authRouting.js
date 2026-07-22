
import express from "express";
import {
    signup,    

} from "../Controller/authController.js";

const router = express.Router();

router.post("/register", signup);



export default router;