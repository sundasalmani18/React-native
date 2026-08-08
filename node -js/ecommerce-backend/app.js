import dotenv from 'dotenv';

import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';
import categoryRouting from "./src/Routing/categoryRouting.js"
import authRoutes from "./src/Routing/authRouting.js";
import productRouting from "./src/Routing/productRouting.js";
import orderRouting from "./src/Routing/orderRouting.js";
dotenv.config();

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
app.use("/api/category", categoryRouting);
app.use("/api/product", productRouting);
app.use("/api/order", orderRouting);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server Running on Port ${PORT}`);
});