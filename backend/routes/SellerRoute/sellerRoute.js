import express from "express";
import { requireAuth } from "../../Middleware/authMiddleware.js";
import { resendOtp, sendOtp, verifyOtp } from "../../controllers/SellerControllers/AuthController/SellerOtpController.js";
import { sellerSignUp } from "../../controllers/SellerControllers/AuthController/ragistrationController.js";
import { LoginSeller } from "../../controllers/SellerControllers/AuthController/sellerLoginController.js";



const Router = express.Router();

Router.post('/seller/signup/sendotp', sendOtp);
Router.post('/seller/signup/resendotp', resendOtp);
Router.post('/seller/signup/verifyotp', verifyOtp);
Router.post('/seller/signup/updatepassword',requireAuth, sellerSignUp,);
Router.post('/seller/login', LoginSeller);

export default Router;
