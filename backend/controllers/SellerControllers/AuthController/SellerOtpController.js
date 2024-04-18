import { Seller } from "../../../Database/Models/SellerDatabaseModels/sellerSchema.js";
import transporter from "../../EmailService.js";

import { generateToken } from "../../UserController/AuthController/Utils/AuthUtils.js";
import dotenv from "dotenv"
dotenv.config()
const generateOTP = () => {
    let otp = '';

    // Generate 3 random characters
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10); 
    }

    return otp;
};
export const sendOtp = async (req, resp) => {
    const { email } = req.body;
    
    // Check if email is provided
    if (!email) {
        return resp.status(400).json({ error: 'Email is required' });
    }

    try {
        const seller = await Seller.findOne({ email });

        if (seller) {
            return resp.status(409).json("seller Already Exists");
        } else {
            let _otp = generateOTP();

            // Ensure _otp is a valid number
            if (isNaN(parseInt(_otp))) {
                _otp = generateOTP(); // Regenerate OTP if it's not a valid number
            }

            const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes
            const info = await transporter.sendMail({
                from: process.env.email,
                to: email,
                subject: "OTP verification",
                text: _otp,
                html: ` <div class="container">
                <div class="header">
                    <h1>Welcome to Revouge</h1>
                </div>
                <div class="content">
                    <p>Hello,</p>
                    <p>We're excited to have you join Revouge! Below is your One-Time Password (OTP) to create your account:</p>
                    <div class="otp">
                        <strong>${_otp}</strong>
                    </div>
                    <p>If you didn't request this OTP, please ignore this email. Your account's security is important to us.</p>
                    <p>Thank you for choosing Revouge!</p>
                </div>
                <div class="footer">
                    <p>Best regards,</p>
                    <p>The Revouge Team</p>
                </div>
            </div>`,
            });

            const sellerName = Math.random().toString(36).substring(2, 10);
            const password = Math.random().toString(36).substring(2, 11);
            const contactNumber = Math.random().toString(36).substring(2, 11);
            const shopAddress = Math.random().toString(36).substring(2, 11);
            const gstNumber = Math.random().toString(36).substring(2, 11);
            const shopOwnerName = Math.random().toString(36).substring(2, 11);
            const SellerToSave = {
                email,
                otp: _otp, 
                otpExpires, // Save expiration date and time
                
                password,
                sellerName,
                contactNumber,
                shopAddress,
                gstNumber,
                shopOwnerName,
                
            };

            await Seller.create(SellerToSave);

            resp.status(200).json(SellerToSave.email);
        }
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};


export const resendOtp = async (req, resp) => {
    const { email } = req.body;
    try {
        const seller = await Seller.findOne({ email });

        if (!seller) {
            return resp.status(404).json("Seller not found");
        }

        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        const _otp = generateOTP();
        Seller.otp = _otp; 
        Seller.otpExpires = otpExpires;
        
        await seller.save();

        const info = await transporter.sendMail({
            from: process.env.email,
            to: email,
            subject: "Resend OTP",
            text: _otp,
            html: `<b>Here's your resent OTP: ${_otp}</b>`,
        });

        resp.status(200).json({ message: "OTP resent successfully", email: seller.email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};



export const verifyOtp = async (req, resp) => {
    const { email, otp } = req.body;
    try {
        const seller = await Seller.findOne({ email });

        if (!seller) {
            return resp.status(404).json("Seller not found");
        }

        if (seller.otp !== otp) {
            return resp.status(400).json("Incorrect OTP");
        }

        // Clear the otp field
        seller.otp = '';

        // Save the seller data
        await seller.save();

        // OTP is correct, send email back to Seller
        const info = await transporter.sendMail({
            from: process.env.email,
            to: email,
            subject: "OTP Verification Success",
            text: "Your OTP has been verified successfully.",
            html: "<b>Your OTP has been verified successfully.</b>",
        });

        // Generate and set JWT token
        const token = generateToken(seller._id);
        resp.cookie('jwt', token, { httpOnly: true, secure: true });

        // Respond with success message
        resp.status(200).json({ message: "OTP verified successfully", email: seller.email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};
