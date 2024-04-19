import bcrypt from 'bcrypt'
import { User } from '../../../Database/Models/UserDatabaseModel/userSchema.js';
import { generaterefreshToken } from './Utils/AuthUtils.js';


export const userSignUP = async(req,res)=>{
  try {
    const { username, password } = req.body;
    const userId = req.userId.id
    console.log(userId)
    // Find the user by email
    const user = await User.findOne({ userId});

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Update user details
    user.username = username;
    user.password = await bcrypt.hash(password, 10); // Hash new password

    // Save the updated user
    await user.save();
    const token = generaterefreshToken(user);

    // Set JWT cookie
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    // Respond with success message and updated user data
    return res.status(200).json({
        success: true,
        message: "User details updated successfully",
        userData: {
            username: user.username,
            email: user.email
        }
    });
} catch (error) {
    console.error("Error updating user after OTP verification:", error);
    return res.status(500).json({
        message: "Error updating user after OTP verification",
        error
    });
}

}