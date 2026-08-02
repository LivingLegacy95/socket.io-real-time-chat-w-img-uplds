import express from "express";
import authRoutes from "../routes/auth.route.js"
import dotenv from "dotenv"
import { connetctDB } from "../lib/db.js";

const app = express();

// allows content to be read from env file
dotenv.config();

app.use("/api/auth", authRoutes );

// grabs variable from .env file
const PORT = process.env.PORT


// middleware needed for app to be able to read json content
app.use(express.json());

app.listen(PORT, () =>{
    console.log("Server is running on PORT:" + PORT);
    connetctDB();
})