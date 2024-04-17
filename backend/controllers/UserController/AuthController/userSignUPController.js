import bcrypt from 'bcrypt'
import { User } from '../../../Database/Models/UserDatabaseModel/userSchema.js';



export const userSignUP = async(req,res)=>{
           try {
            const {username, email ,password} = req.body

            const CheckUser = User.findOne({email})
            if (CheckUser) {
                res.status(401).json({
                  message:"User Already Exist"
                })
            }
            
        const HashedPassword = await bcrypt.hash(password,10);
       
        const newUser = User({username,email,password:HashedPassword })
               
       const SavedUser = await newUser.save()
       const token = generateToken(SavedUser)
       res.cookie('jwt', token, { httpOnly: true, secure: true });
       const userData = await User.findOne({ email: email })('-password');

       return res.status(200).json({
           success: true,
           message: "Login success",
           userData
       });
           } catch (error) {
              res.status(400).json({
                message:"Error in User SignUP API",
                error
              })
           }
}