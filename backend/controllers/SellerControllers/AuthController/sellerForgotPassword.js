import { Seller } from '../../../Database/Models/SellerDatabaseModels/sellerSchema.js';
import dotenv from 'dotenv';
import transporter from "../../EmailService.js";
import jwt from "jsonwebtoken"; 
import bcrypt from 'bcrypt';

dotenv.config();

export const sellerForgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        const seller = await Seller.findOne({ email });
        
        if (!seller) {
            return res.status(400).json({ message: 'User not found' });
        }

      
        const token = jwt.sign({ userId: seller._id }, process.env.secretKey, { expiresIn: '1h' });

        
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
            const sellerId = decodedToken.userId
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const updateSeller = Seller.findByIdAndUpdate(sellerId,{password:hashedPassword})
            if(!updateSeller){
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

