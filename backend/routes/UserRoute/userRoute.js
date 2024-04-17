import express from "express";
import { userSignUP } from "../../controllers/UserController/AuthController/userSignUPController.js";


const Router = express.Router()


Router.post('/signup', userSignUP)

export default Router