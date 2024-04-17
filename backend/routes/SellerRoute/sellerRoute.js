import express from "express";
import { SellerSignUP } from "../../controllers/SellerControllers/ProductController/AuthController/ragistrationController.js";
import { LoginSeller } from "../../controllers/SellerControllers/ProductController/AuthController/sellerLoginController.js";


const SellerRoute = express.Router()


SellerRoute.post('/register',SellerSignUP)
SellerRoute.post('/login',LoginSeller)

export default SellerRoute