import bcrypt from 'bcrypt'
import { User } from '../../../Database/Models/UserDatabaseModel/userSchema.js';



export const userSignUP = async(req,res)=>{
           try {
            const {username, email ,password,sellerName} = req.body
        const HashedPassword = await bcrypt.hash(password,10);
       const newUser = User({username,email,sellerName,password:HashedPassword })
               
       const SavedUser = await newUser.save()
       res.status(201).json({
        message:'User Created SuccessFully', user:SavedUser
       })
           } catch (error) {
              res.status(400).json({
                message:"Error in User SignUP API",
                error
              })
           }
}