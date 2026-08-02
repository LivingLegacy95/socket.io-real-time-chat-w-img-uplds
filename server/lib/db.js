import mongoose from "mongoose";
import dotenv from "dotenv";

export const connetctDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
}