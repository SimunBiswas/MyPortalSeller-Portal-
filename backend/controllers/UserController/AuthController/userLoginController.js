import bcrypt from 'bcrypt'
import { User } from '../../../Database/Models/UserDatabaseModel/userSchema.js'
import { generateToken } from './Utils/AuthUtils.js'



export const LoginUser = async(req,res)=>{
           try {

            const {email,password} = req.body
            const user =  User.findOne({email})
            if (!user) {
                res.status(400).json({
                    message:"User Does Not Exist",

                  })
            }

           const isPasswordValid = bcrypt.compare(password, user.password)
           if (!isPasswordValid) {
            res.status(400).json({
                message:"Invalid Password",
        
              })
           }
           const token = generateToken(user)
           res.cookie('jwt', token, { httpOnly: true, secure: true });
           const userData = await User.findOne({ email: email })('-password');
   
           return res.status(200).json({
               success: true,
               message: "Login success",
               userData
           });

           } catch (error) {
            res.status(400).json({
                message:"Error in User Login API",
                error
              })
           }
}