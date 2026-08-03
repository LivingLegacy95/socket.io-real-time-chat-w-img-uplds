import jwt from "jsonwebtoken"
import User from "../models/user.model"


// application protection, this is middleware used to authenticate session token before routing user to route to update profile.
export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({message: "Unauthorized - No Token Provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message: "Unauthorized - Invalid Token" });
        }
        const user = await user.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({message: "User not found" });
        }
        // if/when user gets to this function, user is authenticated we are now telling application to return user and call the next function from route controller = "updateProfile"
        req.user = user
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
}