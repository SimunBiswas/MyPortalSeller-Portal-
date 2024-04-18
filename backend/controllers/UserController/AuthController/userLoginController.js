import bcrypt from 'bcrypt';
import { User } from '../../../Database/Models/UserDatabaseModel/userSchema.js';
import { generaterefreshToken } from './Utils/AuthUtils.js';

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User Does Not Exist",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        const token = generaterefreshToken(user);
        res.cookie('jwt', token, { httpOnly: true, secure: true });

        const userData = await User.findOne({ email }).select('-password');

        return res.status(200).json({
            success: true,
            message: "Login success",
            userData
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error in User Login API",
            error
        });
    }
};
