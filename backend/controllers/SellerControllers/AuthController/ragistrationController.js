import bcrypt from 'bcrypt'
import { Seller } from '../../../Database/Models/SellerDatabaseModels/sellerSchema.js';
import { generaterefreshToken } from '../../UserController/AuthController/Utils/AuthUtils.js';


export const sellerSignUp = async(req,res)=>{
  try {
    const { shopName, password,contactNumber ,shopAddress,gstNumber,shopOwnerName} = req.body;
    const userId = req.userId.id
    console.log(userId)
    // Find the user by email
    const seller = await Seller.findOne({ userId});

    if (!seller) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    const HashedPassword = await bcrypt.hash(password, 10);
    const SellerUpdate = await User.updateOne({
        _id:userId
      }, {$set :{
          shopName:shopName,
          password:HashedPassword,
          contactNumber:contactNumber,
          shopAddress:shopAddress,
          gstNumber:gstNumber,
          shopOwnerName:shopOwnerName
    
      } })
    const token = generaterefreshToken(seller._id);

    // Set JWT cookie
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    // Respond with success message and updated user data
    return res.status(200).json({
        success: true,
        message: "User details updated successfully",
        sellerData: {
            username: seller.username,
            email: seller.email
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