
import { Seller } from "../../../../Database/Models/SellerDatabaseModels/sellerSchema.js";
import crypto from 'crypto';
import transporter from "../../../EmailService.js";

const generateOTP = () => {
    let otp = '';

    // Generate 3 random characters
    for (let i = 0; i < 3; i++) {
        otp += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random lowercase letter
    }

    // Generate 3 characters using crypto
    const randomBytes = crypto.randomBytes(3).toString('hex');
    otp += randomBytes;

    return otp;
};

export const sendOtp = async (req, resp) => {
    const { Email } = req.body;
    try {
        const user = await Seller.findOne({ Email });

        if (user) {
            return resp.status(409).json("User Already Exists");
        } else {
            const _otp = generateOTP();
            const info = await transporter.sendMail({
                from: process.env.Email,
                to: Email,
                subject: "OTP verification",
                text: _otp,
                html: `<b>Here's your OTP to create an account: ${_otp}</b>`,
            });

            const name = Math.random().toString(36).substring(2, 10);
            const password = Math.random().toString(36).substring(2, 11);
            const userToSave = {
                Email,
                otp: _otp,
                name,
                password,
                avatar: {
                    public_id: "demo_id",
                    url: "demo_url"
                }
            };

            await Seller.create(userToSave);

            resp.status(200).json(userToSave.Email);

            // Delete user data after 30 seconds
            setTimeout(async () => {
                await Seller.findOneAndDelete({ Email });
            }, 120000);
        }
    } catch (error) {
        console.error(error);
        return resp.status(400).json({ error: 'Error' });
    }
};

export const resendOtp = async (req, resp) => {
    const { Email } = req.body;
    try {
        const user = await Seller.findOne({ Email });

        if (!user) {
            return resp.status(404).json("User not found");
        }

        const _otp = generateOTP();
        user.otp = _otp;
        await user.save();

        const info = await transporter.sendMail({
            from: process.env.Email,
            to: Email,
            subject: "Resend OTP",
            text: _otp,
            html: `<b>Here's your resent OTP: ${_otp}</b>`,
        });

        resp.status(200).json({ message: "OTP resent successfully", Email: user.Email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error' });
    }
};


export const verifyOtp = async (req, resp) => {
    const { Email, otp } = req.body;
    try {
        const user = await Seller.findOne({ Email });

        if (!user) {
            return resp.status(404).json("User not found");
        }

        if (user.otp !== otp) {
            return resp.status(400).json("Incorrect OTP");
        }

        // OTP is correct, send Email back to user
        const info = await transporter.sendMail({
            from: process.env.Email,
            to: Email,
            subject: "OTP Verification Success",
            text: "Your OTP has been verified successfully.",
            html: "<b>Your OTP has been verified successfully.</b>",
        });

        resp.status(200).json({ message: "OTP verified successfully", Email: user.Email });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({ error: 'Internal Server Error Api' });
    }
};
``