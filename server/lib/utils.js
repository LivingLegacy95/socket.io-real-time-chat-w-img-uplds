import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
    // jwt.sign is the logic used to create a session token, first arguement it takes is known as "payload" this is what is used to differentiate multiple tokens for multiple users, the secret key from the .env and finally any signin options
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"7d"
    })
    // logic to send session token to user in the browser with cookies
    res.cookie("jwt", token,{
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7days calculated to milliseconds
        httpOnly:true, // prevents XSS attacks - cross-site scripting attacks
        sameSite: "strict", // prevents CSRF attacks - cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development" // in production this would be "true", remains true while in "development"
    })
    return token;
}