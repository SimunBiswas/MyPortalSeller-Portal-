// have to create logic for seller login using seller model

import bcrypt from 'bcrypt'

import { Seller } from '../../../../Database/Models/SellerDatabaseModels/sellerSchema.js'
import { generateToken } from '../../../UserController/AuthController/Utils/AuthUtils.js'

export const LoginSeller = async(req,res)=>{
    try {
        const { Email,Password, } = req.body
        const user = await Seller.findOne({ Email})
        
        if (!user) {
            return res.status(400).json({
                message: "User Does Not Exist",
            })
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password)
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Password",
            })
        }
        
        const token = generateToken(user)

        // Set the cookie
        res.cookie('auth_token', token, { 
            maxAge: 86400000, // 24 hours in milliseconds
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' // Set to true in production
        })

        // Send user and token in the response
        res.status(200).json({ user: user })

    } catch (error) {
        res.status(400).json({
            message: "Error in Seller Login API",
            error
        })
    }
}