import { User } from "../../../Database/Models/UserDatabaseModel/userSchema.js";
import dotenv from 'dotenv';
import transporter from "../../EmailService.js";
import jwt from "jsonwebtoken"; 
import bcrypt from 'bcrypt';

dotenv.config();

export const userForgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Generate a token with user ID
        const token = jwt.sign({ userId: user._id }, process.env.secretKey, { expiresIn: '1h' });

        // Send an email with the token link
        const resetLink = `${process.env.APP_URL}/reset-password?token=${token}`; 
        const mailOptions = {
            from: process.env.email,
            to: email,
            subject: 'Reset Password',
            html: `
                <p>You have requested to reset your password.</p>
                <p>Please click <a href="${resetLink}">here</a> to reset your password.</p>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Failed to send email' });
            }
            res.status(200).json({ message: 'Reset password email sent successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

import jwt from "jsonwebtoken";


export const resetPassword = async (req, res) => {
    const { token } = req.query;
    const {password} = req.body
    if (!token || !password) {
        return res.status(400).json({ message: 'Token and password are required' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.secretKey);
        if(!decodedToken){
            res.status(401).json({
                message:'unauthorize user'
            })
        }
        try{
            const userId = decodedToken.userId
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const updateUser = User.findByIdAndUpdate(userId,{password:hashedPassword})
            if(!updateUser){
                res.status(400).json({
                    message:'user not found'
                })
            }

        }
        catch(error){
            res.status(400).json({
                message:error
            })
        }
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

