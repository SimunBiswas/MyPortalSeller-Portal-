import express from "express";
import { requireAuth } from "../../Middleware/authMiddleware.js";
import { resendOtp, sendOtp, verifyOtp } from "../../controllers/SellerControllers/AuthController/SellerOtpController.js";
import { sellerSignUp } from "../../controllers/SellerControllers/AuthController/ragistrationController.js";
import { LoginSeller } from "../../controllers/SellerControllers/AuthController/sellerLoginController.js";
import { resetPassword, sellerForgotPassword } from "../../controllers/SellerControllers/AuthController/sellerForgotPassword.js";
import { sellerLogout } from "../../controllers/SellerControllers/AuthController/sellerLogout.js";



const Router = express.Router();

Router.post('/seller/signup/sendotp', sendOtp);
Router.post('/seller/signup/resendotp', resendOtp);
Router.post('/seller/signup/verifyotp', verifyOtp);
Router.post('/seller/signup/updatepassword',requireAuth, sellerSignUp,);
Router.post('/seller/login', LoginSeller);
Router.post('/seller/forgot-password', sellerForgotPassword)
Router.post('/seller/reset-password', resetPassword)
Router.get('/seller/logout',requireAuth, sellerLogout);
export default Router;
