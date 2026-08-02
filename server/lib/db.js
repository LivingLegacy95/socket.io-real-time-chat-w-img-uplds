import mongoose from "mongoose";
import dotenv from "dotenv";

export const connetctDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        
    }
}