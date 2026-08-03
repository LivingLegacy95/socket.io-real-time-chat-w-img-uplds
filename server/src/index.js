import express from "express";
import authRoutes from "../routes/auth.route.js"
import dotenv from "dotenv"
import { connetctDB } from "../lib/db.js";
import cookieParser from "cookie-parser"

const app = express();

// allows content to be read from env file
dotenv.config();

// middleware needed for app to be able to read json content
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes );

// grabs variable from .env file
const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log("Server is running on PORT:" + PORT);
    connetctDB();
})