import express from "express";
import authRoutes from "../routes/auth.route.js";
import messageRoutes from "../routes/message.route.js";
import dotenv from "dotenv";
import { connetctDB } from "../lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// allows content to be read from env file
dotenv.config();

// middleware needed for app to be able to read json content
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

// Increase JSON parsing limit (e.g., to 50 Megabytes)
app.use(express.json({ limit: "50mb" }));

// Increase URL-encoded parsing limit
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// grabs variable from .env file
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log("Server is running on PORT:" + PORT);
	connetctDB();
});
