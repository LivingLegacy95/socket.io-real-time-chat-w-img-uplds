import User from "../models/user.model";

export const getUsersForSideBar = async (req, res) => {
    try {
        // grabs user by id using 
        const loggedInUserId = req.user._id;
        // this variable finds all users that are not equal to the logged-in-user's ID, and the passwords.
        const filterUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");
        res. status(200).json(filterUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}