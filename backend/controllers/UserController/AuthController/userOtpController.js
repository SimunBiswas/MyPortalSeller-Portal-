import  { User } from "../../../Database/Models/UserDatabaseModel/userSchema.js";
import transporter from "../../EmailService.js";
import crypto from 'crypto';
import { generateToken } from "./Utils/AuthUtils.js";
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
        const user = await User.findOne({ email });

        if (user) {
            return resp.status(409).json("User Already Exists");
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

            const name = Math.random().toString(36).substring(2, 10);
            const password = Math.random().toString(36).substring(2, 11);
            const userToSave = {
                email,
                otp: _otp, 
                otpExpires, // Save expiration date and time
                name,
                password,
                avatar: "demo_url" // Set avatar as string
            };

            await User.create(userToSave);

            resp.status(200).json(userToSave.email);
        }
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};


export const resendOtp = async (req, resp) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return resp.status(404).json("User not found");
        }

        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        const _otp = generateOTP();
        user.otp = _otp; 
        user.otpExpires = otpExpires;
        user.avatar = "demo_url"; // Set avatar as string
        await user.save();

        const info = await transporter.sendMail({
            from: process.env.email,
            to: email,
            subject: "Resend OTP",
            text: _otp,
            html: `<b>Here's your resent OTP: ${_otp}</b>`,
        });

        resp.status(200).json({ message: "OTP resent successfully", email: user.email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};



export const verifyOtp = async (req, resp) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return resp.status(404).json("User not found");
        }

        if (user.otp !== otp) {
            return resp.status(400).json("Incorrect OTP");
        }
         user.otp = ''
         await user.save()
        // OTP is correct, send email back to user
        const info = await transporter.sendMail({
            from: process.env.email,
            to: email,
            subject: "OTP Verification Success",
            text: "Your OTP has been verified successfully.",
            html: "<b>Your OTP has been verified successfully.</b>",
        });

        console.log(user)
        const token = generateToken(user._id)
        resp.cookie('jwt', token, { httpOnly: true, secure: true });
        resp.status(200).json({ message: "OTP verified successfully", email: user.email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};
