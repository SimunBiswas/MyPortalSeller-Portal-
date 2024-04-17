import bcrypt from 'bcrypt'
import { Seller } from '../../../../Database/Models/SellerDatabaseModels/sellerSchema.js'




export const SellerSignUP = async(req,res)=>{
           try {
            const {Email,Password,ShopName,ContactNumber,ShopAddress,GstNumber,ShopOwnerName} = req.body

            const CheckUser = Seller.findOne({Email ,GstNumber})
            if (CheckUser) {
                res.status(401).json({
                  message:"User Already Exist"
                })
            }
            
        const HashedPassword = await bcrypt.hash(Password,10);
       
        const newUser = User({Email,ShopName,ContactNumber,ShopAddress,GstNumber,ShopOwnerName,Password:HashedPassword })
               
       const SavedUser = await newUser.save()
       res.status(201).json({
        message:'Seller Created SuccessFully', user:SavedUser
       })
           } catch (error) {
              res.status(400).json({
                message:"Error in User Seller SignUP API",
                error
              })
           }
}