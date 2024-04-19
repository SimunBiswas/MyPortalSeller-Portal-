import express from "express";
import { userSignUP } from "../../controllers/UserController/AuthController/userSignUPController.js";
import { resendOtp, sendOtp, verifyOtp } from "../../controllers/UserController/AuthController/userOtpController.js";
import { LoginUser } from "../../controllers/UserController/AuthController/userLoginController.js";
import { requireAuth } from "../../Middleware/authMiddleware.js";

const Router = express.Router();

Router.post('/user/signup/sendotp', sendOtp);
Router.post('/user/signup/resendotp', resendOtp);
Router.post('/user/signup/verifyotp', verifyOtp);
Router.post('/user/signup/updatepassword', requireAuth,userSignUP);
Router.post('/user/login', LoginUser);

export default Router;
