import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: process.env.mail_pass,
    },
});

// Add error event listener to the transporter
transporter.on('error', (error) => {
    console.error('Nodemailer Error:', error);
});

export default transporter;
