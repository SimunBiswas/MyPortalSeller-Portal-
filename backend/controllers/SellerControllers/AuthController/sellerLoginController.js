import bcrypt from 'bcrypt';
import { Seller } from '../../../Database/Models/SellerDatabaseModels/sellerSchema.js';
import { generaterefreshToken } from '../../UserController/AuthController/Utils/AuthUtils.js';

export const LoginSeller = async (req, res) => {
    try {
        const { email, password } = req.body;
        const seller = await Seller.findOne({ email });

        if (!seller) {
            return res.status(400).json({
                message: "Seller Does Not Exist",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        const token = generaterefreshToken(seller._id);
        res.cookie('jwt', token, { httpOnly: true, secure: true });

        const sellerData = await Seller.findOne({ email }).select('-password');

        return res.status(200).json({
            success: true,
            message: "Login success",
            sellerData
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error in User Login API",
            error
        });
    }
};
