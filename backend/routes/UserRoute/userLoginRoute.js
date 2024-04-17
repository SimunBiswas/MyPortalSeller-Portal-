import express from "express";
import { LoginUser } from "../../controllers/UserController/AuthController/userLoginController.js";


const Login = express.Router()


Login.post('/login', LoginUser)

export default Login