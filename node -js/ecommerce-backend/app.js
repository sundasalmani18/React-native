import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';

import authRoutes from "./src/Routing/authRouting.js";


// console.log("MONGO_URI =", JSON.stringify(process.env.MONGO_URI));
connectDB()
  .then(() => console.log("Successful DB Connected"))
  .catch((error) => console.log("DB connection Lose error:", error.message))


const app = express();

app.use(cors());

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Backend Running...");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server Running on Port ${PORT}`);
});