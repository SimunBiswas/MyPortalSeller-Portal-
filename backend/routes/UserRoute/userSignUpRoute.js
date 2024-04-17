import express from "express";
import { userSignUP } from "../../controllers/UserController/AuthController/userSignUPController.js";


const Signup = express.Router()


Signup.post('/signup', userSignUP)

export default Signup