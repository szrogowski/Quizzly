import express from "express";
import {connectDB} from "./config/db.js";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();



app.use(express.json());


app.use("/api/users", authRoutes)

app.listen(5000,()=>{
    console.log(`server running on port ${PORT}`)
})
connectDB();



